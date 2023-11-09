import prisma from "../prisma";

export default async function GetAllExpensesByUserClerkId(
  userClerkId: string
): Promise<any[]> {
  const expenses = await prisma.expense.findMany({
    where: {
      userClerkId,
    },
  });

  return expenses;
}
