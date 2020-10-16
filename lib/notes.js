'use strict';

const NotesModel = require('./model/notes-collection.js');
let run = new NotesModel();

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
    return run.add(this);
  }
  delete() {
    return run.delete(this.payload);
  }
  list() {
    return run.list(this.payload);
  }
}

module.exports = Note;