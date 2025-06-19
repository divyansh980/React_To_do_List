const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
  const todos = await Todo.find({ user: req.userId }).sort({ createdAt: -1 });
  res.json(todos);
};

exports.addTodo = async (req, res) => {
  const { title } = req.body;
  const todo = await Todo.create({ user: req.userId, title });
  res.status(201).json(todo);
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const updated = await Todo.findOneAndUpdate(
    { _id: id, user: req.userId },
    { $set: req.body },
    { new: true }
  );
  res.json(updated);
};

exports.deleteTodo = async (req, res) => {
  await Todo.findOneAndDelete({ _id: req.params.id, user: req.userId });
  res.json({ message: "Todo deleted" });
};
