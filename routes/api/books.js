const express = require("express");

const books = require("../../books/books");

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(books);
});

router.get("/:id", async (req, res) => {
  res.json(books[0]);
});

router.post("/", (req, res) => {
  res.json(books[0]);
});

router.put("/:id", (req, res) => {
  res.json(books[0]);
});

router.delete("/:id", (req, res) => {
  res.json(books[0]);
});

module.exports = router;
