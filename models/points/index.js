const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const pointsPath = path.join(__dirname, "points.json");

const getAll = async () => {
  const data = await fs.readFile(pointsPath);
  return JSON.parse(data);
};

const getById = async (id) => {
  const pointsId = String(id);
  const points = await getAll();
  const result = points.find((point) => point.id === pointsId);
  return result || null;
};

const addPoints = async (data) => {
  const points = await getAll();
  const newPoint = {
    id: nanoid(),
    ...data,
  };
  points.push(newPoint);
  await fs.writeFile(pointsPath, JSON.stringify(points, null, 2));
  return newPoint;
};

const editPoint = async (id, data) => {
  const pointId = String(id);
  const points = await getAll();
  const index = points.findIndex((item) => item.id === pointId);
  if (index === -1) {
    return null;
  }
  points[index] = { id, ...data };
  await fs.writeFile(pointsPath, JSON.stringify(points, null, 2));
  return points[index];
};

const deleteById = async (id) => {
  const pointId = String(id);
  const points = await getAll();
  const index = points.findIndex((item) => item.id === pointId);
  if (index === -1) {
    return null;
  }
  const [result] = points.splice(index, 1);
  await fs.writeFile(pointsPath, JSON.stringify(points, null, 2));
  return result;
};

module.exports = {
  getAll,
  getById,
  addPoints,
  editPoint,
  deleteById,
};
