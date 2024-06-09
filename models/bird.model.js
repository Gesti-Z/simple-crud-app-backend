const mongoose = require("mongoose");

const BirdSchema = mongoose.Schema(
  {
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    species: { type: String, required: true },
    family: { type: String, required: true },
    habitat: { type: String, required: true },
    place_of_found: { type: String, required: true },
    diet: { type: String, required: false },
    description: { type: String, required: false },
    weight_kg: { type: Number, required: false },
    height_cm: { type: Number, required: false },
    image: { type: String, required: false }
  },
  {
    timestamps: true,
  }
);



const Bird = mongoose.model("Bird", BirdSchema);

module.exports = Bird;
