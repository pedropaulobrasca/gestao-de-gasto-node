import { Request, Response } from "express";
import GetAllExpensesByUserClerkId from "../services/expense/GetAllExpensesByUserClerkId";
import { IExpense, IUpdateExpense } from "../types/expense";
import CreateExpense from "../services/expense/CreateExpense";
import DeleteExpense from "../services/expense/DeleteExpense";
import UpdateExpense from "../services/expense/UpdateExpense";
import { Expense } from "@prisma/client";
import GetExpenseById from "../services/expense/GetExpenseById";

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
        repeatExpense: req.body.repeatExpense,
      };

      const expenseCreated = await CreateExpense(expenseData);

      res.status(201).json({ expenseCreated });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const expense = await GetExpenseById(Number(id));

      if (!expense) {
        throw new Error("Expense not found");
      }

      const expenseData: IUpdateExpense = {
        id: expense.id,
        paid: req.body.paid,
        expense: req.body.expense,
        monthlyValue: req.body.monthlyValue,
        date: req.body.date,
        installments: req.body.installments,
        totalValue: req.body.totalValue,
        description: req.body.description,
        createdAt: expense.createdAt,
        userClerkId: req.body.userClerkId,
      };

      await UpdateExpense(Number(id), expenseData);

      res.status(200).json({ message: "Expense updated" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await DeleteExpense(Number(id));

      res.status(200).json({ message: "Expense deleted" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default new ExpenseController();
