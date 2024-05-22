const express = require("express");
const moment = require("moment");
const fs = require("fs/promises");
const cors = require("cors");

const booksRouter = require("./routes/api/books");

const pointsRouter = require("./routes/api/points");

const usersRouter = require("./routes/api/users");

const app = express();

app.use(cors());

app.use("/api/books", booksRouter);

app.use("/api/points", pointsRouter);

app.use("/api/users", usersRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

module.exports = app;
