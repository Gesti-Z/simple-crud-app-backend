const mongoose = require("mongoose");

const CatSchema = mongoose.Schema(
  {
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    origin: { type: String, required: true },
    temperament: { type: String, required: true },
    colors: { type: [String], required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
  },
  {
    timestamps: true,
  }
);


const Cat = mongoose.model("Cat", CatSchema);

module.exports = Cat;
