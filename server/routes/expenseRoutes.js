const express = require("express");
const router = express.Router();
const expenseCtrl = require("../controllers/expenseController");
const authMiddleware = require("../middleware/auth");

router.use(authMiddleware);
router.post("/", expenseCtrl.createExpense);
router.get("/", expenseCtrl.getExpenses);
router.put("/:id", expenseCtrl.updateExpense);
router.delete("/:id", expenseCtrl.deleteExpense);

module.exports = router;