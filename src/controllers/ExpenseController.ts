import { Request, Response } from "express";
import prisma from "../services/prisma";
import GetAllExpensesByUserClerkId from "../services/expense/GetAllExpensesByUserClerkId";

class ExpenseController {
  async index(req: Request, res: Response): Promise<void> {
    try {
      const { userClerkId } = req.body;

      const expenses = GetAllExpensesByUserClerkId(userClerkId);
      
      if (!expenses) {
        res.status(404).json({ message: "Not Found" });
        return;
      }

      res.status(200).json({ expenses });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default new ExpenseController();
