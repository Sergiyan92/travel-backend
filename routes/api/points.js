const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/points");

const { validateBody, authenticate } = require("../../middlewares");

const schema = require("../../schemas/points");

router.get("/", authenticate, ctrl.getAllPoints);

router.get("/:id", ctrl.getPointsById);

router.post("/", authenticate, validateBody(schema.addSchema), ctrl.addPoint);

router.put(
  "/:id",
  authenticate,

  ctrl.editPoint
);

router.delete("/:id", authenticate, ctrl.deletePoint);

module.exports = router;
