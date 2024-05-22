const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/points");

const { validateBody } = require("../../middlewares");

const schema = require("../../schemas/points");

router.get("/", ctrl.getAllPoints);

router.get("/:id", ctrl.getPointsById);

router.post("/", validateBody(schema.addSchema), ctrl.addPoint);

router.put("/:id", validateBody(schema.addSchema), ctrl.editPoint);

router.delete("/:id", ctrl.deletePoint);

module.exports = router;
