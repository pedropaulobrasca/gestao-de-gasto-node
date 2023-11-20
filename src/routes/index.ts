import { Router } from "express";
import ExpenseController from "../controllers/ExpenseController";
import UserController from "../controllers/UserController";

const router = Router();

router.post("/user", UserController.create);
router.get("/user/:id", UserController.getUser);

router.get("/expense", ExpenseController.index);
router.post("/expense", ExpenseController.create);
router.put("/expense/:id", ExpenseController.update);
router.delete("/expense/:id", ExpenseController.delete);

export default router;
