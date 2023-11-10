import { Request, Response } from "express";
import GetAllExpensesByUserClerkId from "../services/expense/GetAllExpensesByUserClerkId";
import { IExpense } from "../types/expense";
import CreateExpense from "../services/expense/CreateExpense";

class ExpenseController {
  async index(req: Request, res: Response) {
    try {
      const { userClerkId } = req.query;

      const expenses = await GetAllExpensesByUserClerkId(userClerkId as string);

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
      const expenseData: IExpense = {
        paid: req.body.paid,
        expense: req.body.expense,
        monthlyValue: req.body.monthlyValue,
        date: req.body.date,
        installments: req.body.installments,
        totalValue: req.body.totalValue,
        description: req.body.description,
        userClerkId: req.body.userClerkId,
      };

      const expenseCreated = await CreateExpense(expenseData);

      res.status(201).json({ expenseCreated });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default new ExpenseController();
