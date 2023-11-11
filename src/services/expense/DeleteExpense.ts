import prisma from "../prisma";

export default async function DeleteExpense(id: number): Promise<void> {
  await prisma.expense.delete({
    where: {
      id,
    },
  });

  return;
}
