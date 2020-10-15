'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const NotesSchema = new Schema({
  text: { type: String, required: true },
  category: { type: String, required: true },
});

const NotesModel = mongoose.model('Notes', NotesSchema);

module.exports = NotesModel;