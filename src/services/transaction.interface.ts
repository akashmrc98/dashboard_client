export enum PaymenthMethod {
  AXIS_CREDIT_CARD = "AXIS_CREDIT_CARD",
  GPAY = "GPAY",
  AMAZON_PAY_LATER = "AMAZON_PAY_LATER",
}

export enum Bank {
  SBI = "SBI",
}

export enum Metric {
  GRAMS = "grams",
  UNITS = "units",
  LITRES = "litres",
}

export interface Transaction {
  id: number;
  date: string;
  item: string;
  metric: Metric;
  quantity: number;
  units: number;
  price: number;
  totalPrice: number;
  category: string;
  subCategory: string;
  paymentMethod: PaymenthMethod;
  bank: Bank;
  retailer: string;
}

export interface CategoryBasedExpense {
  key: string;
  percent: number;
  value: number;
}

export interface MonthlyTransactionResponse {
  transactions: Transaction[];
  categoryBasedExpense: CategoryBasedExpense[];
  subCategoryBasedExpense: CategoryBasedExpense[];
}
