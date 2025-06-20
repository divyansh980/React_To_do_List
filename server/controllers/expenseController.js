const Expense = require("../models/Expense");

exports.createExpense = async (req, res) => {
  try {
    const expense = new Expense({ ...req.body, userId: req.userId });
    await expense.save();
    res.status(201).json(expense);
  } catch (err) {
    res.status(500).json({ message: "Error creating expense." });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const { category, startDate, endDate } = req.query;
    const filters = { userId: req.userId };
    if (category) filters.category = category;
    if (startDate && endDate)
      filters.date = { $gte: new Date(startDate), $lte: new Date(endDate) };

    const expenses = await Expense.find(filters).sort({ date: -1 });
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ message: "Error fetching expenses." });
  }
};

exports.updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true }
    );
    if (!expense) return res.status(404).json({ message: "Not found" });
    res.status(200).json(expense);
  } catch (err) {
    res.status(500).json({ message: "Error updating expense." });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    if (!expense) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting expense." });
  }
};