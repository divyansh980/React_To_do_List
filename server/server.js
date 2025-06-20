// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");

// dotenv.config();
// connectDB();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Test Route
// app.get("/", (req, res) => {
//   res.send("API is working ✅");
// });

// // Auth and ToDo Routes (to be added later)
// app.use("/api/auth", require("./routes/auth")); // Add after we create auth route
// app.use("/api/todo", require("./routes/todo")); // Add after we create todo route

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const cors = require("cors");
const expenseRoutes = require("./routes/expenseRoutes");
const authRoutes = require("./routes/auth");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));