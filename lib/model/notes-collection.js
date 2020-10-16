'use strict';

const NotesModel = require('../model/notes-schema.js');

class RequestCollection {

  constructor() {
    this.model = NotesModel;
  }

  list(categoryName) {
    if (categoryName) {
      this.model.find({ category: categoryName }).then(info => console.log(info));

    }
  }
  add(note) {
    let newNote = new this.model({
      text: note.payload,
      category: note.category,
    });
    return newNote.save().then(note => console.log(note.text, 'has been saved'));
  }

  delete(id) {
    this.model.deleteOne({ _id: id }, function(err) {});
  }
  update() {
    //Jacob said we didnt need to make this method
  }
}

module.exports = RequestCollection;
