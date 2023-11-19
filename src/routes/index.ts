import { Router } from "express";
import ExpenseController from "../controllers/ExpenseController";
import UserController from "../controllers/UserController";
import passport from "passport";

const router = Router();

router.get("/user/:id", UserController.getUser);

router.get("/expense", ExpenseController.index);
router.post("/expense", ExpenseController.create);
router.put("/expense/:id", ExpenseController.update);
router.delete("/expense/:id", ExpenseController.delete);

router.get(
  "/",
  passport.authenticate("github", {
    scope: ["user:email"],
  }),
  (req, res) => {
    res.send("Hello");
  }
);

export default router;
