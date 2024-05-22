const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  res.json([]);
});

router.post("/", (req, res) => {
  res.json([]);
});

router.put("/", (req, res) => {
  res.json([]);
});

router.delete("/:id", (req, res) => {
  res.json([]);
});

module.exports = router;
