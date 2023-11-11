import prisma from "../prisma";

export default async function GetAllExpensesByUserClerkId(
  userClerkId: string
): Promise<any> {
  const expenses = await prisma.expense.findMany({
    where: {
      userClerkId,
    },
  });

  // Somar todos os valores totais e menais
  const totalValue = expenses.reduce(
    (acc: any, expense: { totalValue: any }) => {
      acc += expense.totalValue;
      return acc;
    },
    0
  );

  const monthlyValue = expenses.reduce(
    (acc: any, expense: { monthlyValue: any }) => {
      acc += expense.monthlyValue;
      return acc;
    },
    0
  );

  return { expenses, totalValue, monthlyValue };
}
