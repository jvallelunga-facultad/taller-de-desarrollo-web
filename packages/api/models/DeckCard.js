'use strict';
const mongoose = require('mongoose');
const mySchema = mongoose.Schema({
  card: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cards',
    required: [true, 'La referencia a la carta es requerida.'],
  },  
  deck: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'decks',
    required: [true, 'La carta debe pertenecer a un mazo.'],
  },
  copies: {
    type: Number,
    min: [0, 'No se pueden tener cartas negativas.'],
    max: [4, 'Solo se permiten 4 copias como maximo.s'],
  }
});

mySchema.index({ card: 1, deck: 1 }, { unique: true });

/* global db */
module.exports = db.model('deck_cards', mySchema);