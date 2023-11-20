import { Router } from "express";
import ExpenseController from "../controllers/ExpenseController";
import UserController from "../controllers/UserController";
import passport from "../services/auth";

const router = Router();

router.get("/user/:id", UserController.getUser);

router.get("/expense", ExpenseController.index);
router.post("/expense", ExpenseController.create);
router.put("/expense/:id", ExpenseController.update);
router.delete("/expense/:id", ExpenseController.delete);

router.get("/", passport.authenticate("github"));
router.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.send("Success");
  }
);

export default router;
