import { Prisma } from "@prisma/client";
import { Expense } from "../../types/expense";
import prisma from "../prisma";

export default async function CreateExpense(data: Expense): Promise<Expense> {
  try {
    if (data.userId === "") {
      throw new Error("User Clerk Id is required");
    }

    if (data.repeatExpense && data.installments === 0) {
      data.monthlyValue = data.totalValue;
    }

    const createdExpense = await prisma.expense.create({
      data: {
        paid: data.paid,
        expense: data.expense,
        monthlyValue: data.monthlyValue || 0,
        date: data.date,
        installments: data.installments || 0,
        totalValue: data.totalValue,
        description: data.description,
        userId: data.userId || "",
        repeatExpense: data.repeatExpense || false,
      },
    });

    return createdExpense;
  } catch (error) {
    throw new Error(String(error));
  }
}
