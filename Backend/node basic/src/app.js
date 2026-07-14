const express = require("express");
const connectDB = require("./db/db");
const userRouter = require("./routes/user.router");

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1/api/users", userRouter);

module.exports = app;