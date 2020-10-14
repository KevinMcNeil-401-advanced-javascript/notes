'use strict';

class Note {
  constructor(obj) {
    this.action = obj.action;
    this.payload = obj.payload;
  }
  add() {
    let newNote = { id: 1, text: this.payload };
    console.log(newNote.text);
  }
  execute(obj) {
    if (this.action === '--add' || this.action === '-a') {
      this.add();
    }
  }
}

module.exports = Note;