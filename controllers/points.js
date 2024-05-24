const Point = require("../models/point");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAllPoints = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Point.find({ owner }).populate("owner", "name email");
  res.json(result);
};

const getPointsById = async (req, res) => {
  const { id } = req.params;
  const result = await Point.findById(id);

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const addPoint = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Point.create({ ...req.body, owner });
  res.status(201).json(result);
};

const editPoint = async (req, res) => {
  const { id } = req.params;
  const result = await Point.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const deletePoint = async (req, res) => {
  const { id } = req.params;
  const result = await Point.findByIdAndDelete(id);
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
