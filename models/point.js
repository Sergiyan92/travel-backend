const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");
const pointSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    img: String,
    coordinates: String,
  },
  { versionKey: false, timestamps: true }
);

pointSchema.post("save", handleMongooseError);

const Point = model("point", pointSchema);

module.exports = Point;
