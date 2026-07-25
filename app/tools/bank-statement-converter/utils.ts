import { Transaction } from "./types";
import {
  AMOUNT_REGEX,
  DATE_REGEX,
  IGNORE_LINES,
  DEBIT_KEYWORDS,
  CREDIT_KEYWORDS,
} from "./constants";

export function normalizeText(text: string): string {
  return text
    .replace(/\r/g, "")
    .replace(/\t/g, " ")
    .replace(/\u00A0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function splitLines(text: string): string[] {
  return text
    .replace(/\r/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

export function cleanAmount(value: string): number | null {
  if (!value) return null;

  const cleaned = value
    .replace(/,/g, "")
    .replace(/[^\d.-]/g, "");

  const num = Number(cleaned);

  return Number.isFinite(num) ? num : null;
}

export function extractAmounts(text: string): number[] {
  const matches = text.match(AMOUNT_REGEX);

  if (!matches) return [];

  return matches
    .map(cleanAmount)
    .filter((n): n is number => n !== null);
}

export function extractDate(line: string): string | null {
  const match = line.match(DATE_REGEX);

  return match ? match[0] : null;
}

export function containsDebit(line: string): boolean {
  const lower = line.toLowerCase();

  return DEBIT_KEYWORDS.some((k) =>
    lower.includes(k.toLowerCase())
  );
}

export function containsCredit(line: string): boolean {
  const lower = line.toLowerCase();

  return CREDIT_KEYWORDS.some((k) =>
    lower.includes(k.toLowerCase())
  );
}

export function isIgnoredLine(line: string): boolean {
  const lower = line.toLowerCase();

  return IGNORE_LINES.some((k) =>
    lower.includes(k.toLowerCase())
  );
}

export function removeHeadersFooters(lines: string[]) {
  return lines.filter((line) => !isIgnoredLine(line));
}

export function sanitizeDescription(
  line: string,
  date: string,
  amounts: number[]
): string {
  let result = line.replace(date, "");

  amounts.forEach((amount) => {
    result = result.replace(amount.toString(), "");
  });

  return result.replace(/\s+/g, " ").trim();
}

export function removeDuplicateTransactions(
  transactions: Transaction[]
): Transaction[] {
  const seen = new Set<string>();

  return transactions.filter((t) => {
    const key = [
      t.date,
      t.description,
      t.debit,
      t.credit,
      t.balance,
    ].join("|");

    if (seen.has(key)) return false;

    seen.add(key);

    return true;
  });
}

export function sortTransactions(
  transactions: Transaction[]
): Transaction[] {
  return [...transactions];
}

export function isValidTransaction(
  transaction: Transaction
): boolean {
  return (
    transaction.date.length > 0 &&
    transaction.description.length > 1 &&
    (
      transaction.debit !== null ||
      transaction.credit !== null ||
      transaction.balance !== null
    )
  );
}

export function mergeWrappedLines(
  lines: string[]
): string[] {
  const merged: string[] = [];

  for (const line of lines) {
    if (
      merged.length &&
      !extractDate(line)
    ) {
      merged[merged.length - 1] +=
        " " + line;
    } else {
      merged.push(line);
    }
  }

  return merged;
}