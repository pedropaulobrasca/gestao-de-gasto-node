import { Expense } from "@prisma/client";
import prisma from "../prisma";

export default async function GetExpenseById(
  id: string
): Promise<Expense | null> {
  const expense = await prisma.expense.findUnique({
    where: {
      id,
    },
  });

  return expense;
}
