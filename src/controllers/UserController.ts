import { Request, Response } from "express";
import GetAllExpensesByUserClerkId from "../services/expense/GetAllExpensesByUserClerkId";
import { IExpense, IUpdateExpense } from "../types/expense";
import CreateExpense from "../services/expense/CreateExpense";
import DeleteExpense from "../services/expense/DeleteExpense";
import UpdateExpense from "../services/expense/UpdateExpense";
import { Expense } from "@prisma/client";
import GetExpenseById from "../services/expense/GetExpenseById";

class UserController {
  async create(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      // const user = await CreateExpense({  });

      res.status(201).json({ user: {} });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const user = await GetExpenseById(id);

      if (!user) {
        throw new Error("User not found");
      }

      res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default new UserController();
