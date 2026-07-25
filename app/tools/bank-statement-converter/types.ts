export interface Transaction {
  date: string;
  description: string;
  debit: number | null;
  credit: number | null;
  balance: number | null;
  reference?: string;
  chequeNo?: string;
  branch?: string;
  transactionType?: string;
}

export interface PDFExtractionResult {
  text: string;
  pages: number;
  isScanned: boolean;
}

export interface OCRResult {
  text: string;
  confidence: number;
}

export interface ParseResult {
  transactions: Transaction[];
  openingBalance?: number;
  closingBalance?: number;
}

export interface ConverterStatus {
  loading: boolean;
  progress: number;
  message: string;
}

export interface ExcelExportOptions {
  fileName: string;
  sheetName?: string;
}