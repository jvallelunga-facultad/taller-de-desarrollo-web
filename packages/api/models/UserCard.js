'use strict';
const mongoose = require('mongoose');
const mySchema = mongoose.Schema({
  card: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cards',
    required: [true, 'La referencia a la carta es requerida.'],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: [true, 'La carta debe pertenecer a un usuario.'],
  },
  copies: {
    type: Number,
    min: [1, 'No se pueden tener 0 cartas en una libreria'],
  }
});

mySchema.index({ card: 1, owner: 1 }, { unique: true });

/* global db */
module.exports = db.model('user_cards', mySchema);