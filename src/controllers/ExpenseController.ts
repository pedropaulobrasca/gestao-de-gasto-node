import { Request, Response } from "express";
import GetAllExpensesByUserClerkId from "../services/expense/GetAllExpensesByUserClerkId";
import { IExpense } from "../types/expense";
import CreateExpense from "../services/expense/CreateExpense";

class ExpenseController {
  async index(req: Request, res: Response) {
    try {
      const { userClerkId } = req.body;

      const expenses = GetAllExpensesByUserClerkId(userClerkId);

      if (!expenses) {
        throw new Error("Expenses not found");
      }

      res.status(200).json({ expenses });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const {
        paid,
        expense,
        monthlyValue,
        date,
        installments,
        totalValue,
        description,
        userClerkId,
      } = req.body;

      const expenseData: IExpense = {
        paid,
        expense,
        monthlyValue,
        date,
        installments,
        totalValue,
        description,
        userClerkId,
      };

      const expenseCreated = await CreateExpense(expenseData);

      res.status(201).json({ expenseCreated });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default new ExpenseController();
