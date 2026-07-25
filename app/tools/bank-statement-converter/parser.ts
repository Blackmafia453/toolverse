import { ParsedTransaction, ParseResult } from "./types";
import { cleanNumber, normalizeDate } from "./utils";

function isAmount(value: string) {
  if (!value) return false;

  const cleaned = value
    .replace(/,/g, "")
    .replace(/[()]/g, "")
    .trim();

  return /^\d+(\.\d{1,2})?$/.test(cleaned);
}

function extractAmounts(text: string): string[] {
  const matches = text.match(
    /(?:\(?\d{1,3}(?:,\d{3})*(?:\.\d{1,2})?\)?|\d+\.\d{1,2})/g
  );

  if (!matches) return [];

  return matches
    .map((x) =>
      x
        .replace(/[(),]/g, "")
        .trim()
    )
    .filter(isAmount);
}

function removeArtifacts(text: string) {
  return text
    .replace(/\bNBR\b/gi, "")
    .replace(/\b131\b/g, "")
    .replace(/page\s+\d+\s+of\s+\d+/gi, "")
    .replace(/account\s*(number|no|#)?\s*[:\-]?\s*\d+/gi, "")
    .replace(/statement\s*(period|date)?[\s\S]{0,40}/gi, "")
    .replace(/opening\s+balance/gi, "")
    .replace(/closing\s+balance/gi, "")
    .replace(/generated\s+by[\s\S]*/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractDate(text: string) {
  const match = text.match(
    /\b\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}\b|\b\d{1,2}\s+[A-Za-z]{3,9}\s+\d{4}\b/
  );

  return match ? normalizeDate(match[0]) : "";
}

function detectTransactionType(
  amounts: string[],
  line: string
): "credit" | "debit" {
  const lower = line.toLowerCase();

  if (
    lower.includes("cr") ||
    lower.includes("credit") ||
    lower.includes("deposit") ||
    lower.includes("received") ||
    lower.includes("salary")
  ) {
    return "credit";
  }

  if (
    lower.includes("dr") ||
    lower.includes("debit") ||
    lower.includes("withdraw") ||
    lower.includes("payment") ||
    lower.includes("purchase")
  ) {
    return "debit";
  }

  /*
    Fallback:
    Most bank statements keep debit/credit columns
    before balance.
  */

  if (amounts.length >= 3) {
    return "debit";
  }

  return "credit";
}

function extractDescription(
  line: string,
  date: string,
  amounts: string[]
) {
  let description = line;

  if (date) {
    description = description.replace(date, "");
  }

  amounts.forEach((amount) => {
    description = description.replace(amount, "");
  });

  return removeArtifacts(description);
}

function parseLine(line: string): ParsedTransaction | null {
  const cleaned = removeArtifacts(line);

  if (!cleaned) return null;

  const date = extractDate(cleaned);

  if (!date) return null;

  const amounts = extractAmounts(cleaned);

  if (!amounts.length) return null;

  const type = detectTransactionType(amounts, cleaned);

  let debit = 0;
  let credit = 0;
  let balance = 0;

  const numbers = amounts.map((x) => Number(cleanNumber(x)));

  if (numbers.length >= 2) {
    balance = numbers[numbers.length - 1];
  }

  if (type === "credit") {
    /*
      Credit format:

      Date Description Credit Balance

      First amount = credit
      Last amount = balance
    */

    credit = numbers[0] ?? 0;

  } else {

    /*
      Debit format:

      Date Description Debit Balance

      Last amount = balance
      Remaining amount = debit

      If multiple amounts exist:
      choose largest non-balance value.
    */

    const debitCandidates = numbers.slice(0, -1);

    debit =
      debitCandidates.length > 0
        ? Math.max(...debitCandidates)
        : 0;
  }

  const description = extractDescription(
    cleaned,
    date,
    amounts
  );

  if (!description && !credit && !debit) {
    return null;
  }

  return {
    date,
    description,
    debit,
    credit,
    balance,
  };
}


function removeDuplicates(
  transactions: ParsedTransaction[]
) {
  const seen = new Set<string>();

  return transactions.filter((tx) => {

    const key = [
      tx.date,
      tx.description,
      tx.debit,
      tx.credit,
      tx.balance,
    ].join("|");

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);

    return true;
  });
}


export function parseTransactions(
  rawText: string
): ParseResult {

  const lines = rawText
    .split(/\r?\n/)
    .map((line) => removeArtifacts(line))
    .filter(Boolean);


  const transactions: ParsedTransaction[] = [];

  let pendingDescription = "";


  for (const line of lines) {

    const transaction = parseLine(line);


    if (transaction) {

      if (pendingDescription) {
        transaction.description =
          `${pendingDescription} ${transaction.description}`
            .trim();

        pendingDescription = "";
      }

      transactions.push(transaction);

    } else {

      /*
        Preserve multi-line descriptions.
        Ignore obvious headers.
      */

      const ignored =
        /date|description|balance|transaction|account|page|statement/i
          .test(line);


      if (!ignored) {
        pendingDescription += " " + line;
      }
    }
  }


  const cleanedTransactions =
    removeDuplicates(transactions);


  return {
    success: cleanedTransactions.length > 0,

    transactions: cleanedTransactions,

    totalTransactions:
      cleanedTransactions.length,

    error:
      cleanedTransactions.length
        ? undefined
        : "No transactions found",
  };
}