const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");
const pointSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    descr: String,
    coordinates: Array,
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

pointSchema.post("save", handleMongooseError);

const Point = model("point", pointSchema);

module.exports = Point;
