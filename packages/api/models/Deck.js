'use strict';
const mongoose = require('mongoose');
const mySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre del mazo es requerido.'],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: [true, 'Los mazos deben pertenecer a algun usuario.'],
  },
});

mySchema.index({ name: 1, owner: 1 }, { unique: true });

/* global db */
module.exports = db.model('decks', mySchema);