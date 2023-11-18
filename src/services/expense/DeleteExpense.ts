import prisma from "../prisma";

export default async function DeleteExpense(id: string): Promise<void> {
  await prisma.expense.delete({
    where: {
      id,
    },
  });

  return;
}
