import { Prisma } from "@prisma/client";
import { Expense } from "../../types/expense";
import prisma from "../prisma";

export default async function CreateExpense(data: Expense): Promise<Expense> {
  try {
    if (data.userClerkId === "") {
      throw new Error("User Clerk Id is required");
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
        userClerkId: data.userClerkId || "",
        repeatExpense: data.repeatExpense || false,
      },
    });

    return createdExpense as Expense;
  } catch (error) {
    throw new Error(String(error));
  }
}
