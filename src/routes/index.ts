import { Router } from "express";
import ExpenseController from "../controllers/ExpenseController";

const router = Router();

router.get("/expense", ExpenseController.index);
router.post("/expense", ExpenseController.create);

export default router;
