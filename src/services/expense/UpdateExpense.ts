import prisma from "../prisma";
import { IUpdateExpense } from "../../types/expense";

export default async function UpdateExpense(
  id: number,
  data: IUpdateExpense
): Promise<void> {
  await prisma.expense.update({
    where: {
      id,
    },
    data,
  });

  return;
}
