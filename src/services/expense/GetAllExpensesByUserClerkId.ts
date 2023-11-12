import prisma from "../prisma";

export default async function GetAllExpensesByUserClerkId(
  userClerkId: string
): Promise<any> {
  const expenses = await prisma.expense.findMany({
    where: {
      userClerkId,
    },
  });

  // pega os valores que precisam pagar ainda (paid false)
  const expensesToPay = expenses.filter((expense) => !expense.paid);

  // Somar todos os valores totais e mensais, incluindo os que estao como repeatExpense true
  const totalValue = expenses.reduce((total, expense) => {
    return total + expense.totalValue;
  }, 0);

  const monthlyValue = expenses.reduce((total, expense) => {
    return total + expense.monthlyValue;
  }, 0);

  const payable = expensesToPay.reduce((total, expense) => {
    return total + expense.monthlyValue;
  }, 0);

  return { expenses, totalValue, monthlyValue, payable };
}
