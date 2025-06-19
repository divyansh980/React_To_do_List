const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("API is working ✅");
});

// Auth and ToDo Routes (to be added later)
app.use("/api/auth", require("./routes/auth")); // Add after we create auth route
app.use("/api/todo", require("./routes/todo")); // Add after we create todo route

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const authRoutes = require("./routes/auth");

// const app = express();
// app.use(cors());
// app.use(express.json()); // ✅ Required to parse JSON body

// app.use("/api/auth", authRoutes); // ✅ Route Mount

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("✅ MongoDB connected");
//     app.listen(process.env.PORT, () => {
//       console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB connection failed", err.message);
//   });
