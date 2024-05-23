const express = require("express");
const { required } = require("joi");

const { validateBody } = require("../../middlewares");

const ctrl = require("../../controllers/auth");

const { schema } = require("../../models/user");

const router = express.Router();

router.post("/signup", validateBody(schema.registerSchema), ctrl.register);

router.post("/login", validateBody(schema.loginSchema), ctrl.login);

module.exports = router;
