import { Router } from "express";
import ExpenseController from "../controllers/ExpenseController";

const router = Router();

router.get("/expense", ExpenseController.index);
router.post("/expense", ExpenseController.create);
router.delete("/expense/:id", ExpenseController.delete);

export default router;
