export type Expense = {
  id?: string;
  paid: boolean;
  expense: string;
  monthlyValue?: number;
  date?: Date;
  installments?: number;
  totalValue: number;
  description?: string;
  createdAt?: Date;
  userId?: string;
  repeatExpense?: boolean;
};

export interface IExpense {
  id?: string;
  paid: boolean;
  expense: string;
  monthlyValue?: number;
  date?: Date;
  installments?: number;
  totalValue: number;
  description?: string;
  createdAt?: Date;
  userId?: string;
  repeatExpense?: boolean;
}

export interface IUpdateExpense {
  id?: string;
  paid?: boolean;
  expense?: string;
  monthlyValue?: number;
  date?: Date;
  installments?: number;
  totalValue?: number;
  description?: string;
  createdAt?: Date;
  userId?: string;
  repeatExpense?: boolean;
}

