'use strict';

const { db } = require('./model/notes-schema.js');
const NotesModel = require('./model/notes-schema.js');

class Note {
  constructor(obj) {
    this.action = obj.action;
    this.payload = obj.payload;
    this.category = obj.category;
  }
  execute() {
    if (this.action === '--add' || this.action === '-a') {
      this.add();
    } else if (this.action === '--delete') {
      this.delete();
    } else if (this.action === '--list') {
      this.list();
    }
  }
  add() {
    let newNote = new NotesModel({
      text: this.payload,
      category: this.category,
    });

    newNote.save()
      .then(note => {
        console.log(note, 'is saved in mongo database');
        const allNotes = NotesModel.find({});
        console.log(allNotes);
      });
  }
  delete(id) {
    NotesModel.findByIdAndDelete({id});
  }
  list() {
    NotesModel.find({})
      .then(list => console.log(list));
  }
}

module.exports = Note;