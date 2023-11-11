import prisma from "../prisma";

export default async function ChangePaidStatusExpense(
  id: number
): Promise<void> {
  await prisma.expense.update({
    where: {
      id,
    },
    data: {
      paid: true,
    },
  });

  return;
}
