export const DATE_PATTERNS = [
  /\b\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}\b/g,
  /\b\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}\b/g,
  /\b\d{1,2}\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s\d{2,4}\b/gi,
];

export const DEBIT_KEYWORDS = [
  "debit",
  "dr",
  "withdrawal",
  "withdraw",
  "purchase",
  "payment",
  "atm",
  "pos",
  "ibft",
  "fund transfer",
  "transfer",
  "cheque",
  "chq",
];

export const CREDIT_KEYWORDS = [
  "credit",
  "cr",
  "deposit",
  "cash deposit",
  "salary",
  "profit",
  "profit credit",
  "received",
  "refund",
  "reversal",
];

export const IGNORE_LINES = [
  "statement",
  "page",
  "generated",
  "customer copy",
  "opening balance",
  "closing balance",
  "available balance",
  "branch",
  "iban",
  "swift",
  "sort code",
  "account title",
  "account number",
  "currency",
];

export const BANK_KEYWORDS = [
  "Meezan",
  "HBL",
  "UBL",
  "MCB",
  "ABL",
  "Allied",
  "Bank Alfalah",
  "Faysal",
  "Standard Chartered",
  "HabibMetro",
  "JS Bank",
  "Askari",
  "Dubai Islamic",
  "Soneri",
  "BankIslami",
  "NBP",
];

export const AMOUNT_REGEX =
  /-?\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g;

export const DATE_REGEX =
  /\b(?:\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}|\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}|\d{1,2}\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s\d{2,4})\b/i;

export const MIN_TRANSACTION_LENGTH = 15;

export const DEFAULT_SHEET_NAME = "Transactions";