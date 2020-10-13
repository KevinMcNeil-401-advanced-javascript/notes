'use strict';

function Note(obj) {
  this.action = obj.action;
  this.payload = obj.payload;
}

Note.prototype.add = function() {
  let newNote = {id: 1, text: this.payload};
  console.log(newNote.text);
}
Note.prototype.execute = function (obj) {
  if (this.action === '--add' || this.action === '-a') {
    this.add();
  }
}

module.exports = Note;