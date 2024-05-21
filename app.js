const express = require("express");
const moment = require("moment");
const fs = require("fs/promises");
const cors = require("cors");

const booksRouter = require("./routes/api/books");

const app = express();

app.use(cors());

app.use("/api/books", booksRouter);

// const corsMiddleware = cors();

// app.use(corsMiddleware);
// app.use(async (res, req, next) => {
//   const { method, url } = req;
//   const date = moment().format("DD-MM-YYYY_hh:mm:ss");
//   await fs.appendFile("./public/server.log", `\n ${method} ${url} ${date}`);
//   next();
// });

// app.use((res, req, next) => {
//   console.log("First middleware");
//   next();
// });

//   .app.get("/products", async (req, res) => {
//     res.json([]);
//     // res.send(books);
//   });

// app.get("/books", async (req, res) => {
//   res.json(books);
//   // res.send(books);
// });

// app.get("/", (request, response) => {
//   response.send("<h2>Hello it is home page</h2>");
// });

// app.get("/contacts", (request, response) => {
//   console.log(request.url);
//   console.log(request.method);
//   response.send("<h2>Hello it is contact page</h2>");
// });

app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

module.exports = app;
