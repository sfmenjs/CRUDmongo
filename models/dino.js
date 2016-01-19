"use strict";
let mongoose = require('mongoose');

let dinoSchema = mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  era: { type: String, required: true },
  diet: { type: String, enum: ['Omnivore', 'Carnivore', 'Herbivore']},
  looks: {
    color: String,
    pattern: String
  },
  canFly: Boolean
});

module.exports = mongoose.model('Dino', dinoSchema);
