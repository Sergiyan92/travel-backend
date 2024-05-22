const points = require("../models/points");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAllPoints = async (req, res) => {
  const result = await points.getAll();
  res.json(result);
};

const getPointsById = async (req, res) => {
  const { id } = req.params;
  const result = await points.getById(id);

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const addPoint = async (req, res) => {
  const result = await points.addPoints(req.body);
  res.status(201).json(result);
};

const editPoint = async (req, res) => {
  const { id } = req.params;
  const result = await points.editPoint(id, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const deletePoint = async (req, res) => {
  const { id } = req.params;
  const result = await points.deleteById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "Delete succses" });
};

module.exports = {
  getAllPoints: ctrlWrapper(getAllPoints),
  getPointsById: ctrlWrapper(getPointsById),
  addPoint: ctrlWrapper(addPoint),
  editPoint: ctrlWrapper(editPoint),
  deletePoint: ctrlWrapper(deletePoint),
};
