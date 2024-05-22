const express = require("express");

const router = express.Router();

router.post("/login", async (req, res) => {
  res.json([]);
});

router.post("/signup", (req, res) => {
  res.json([]);
});

router.get("/logout", (req, res) => {
  res.json([]);
});

router.get("/refresh", (req, res) => {
  res.json([]);
});
router.get("/me", (req, res) => {
  res.json([]);
});

module.exports = router;
