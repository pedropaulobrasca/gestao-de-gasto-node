import { Expense } from "@prisma/client";
import prisma from "../prisma";

export default async function GetExpenseById(
  id: number
): Promise<Expense | null> {
  const expense = await prisma.expense.findUnique({
    where: {
      id,
    },
  });

  return expense;
}
