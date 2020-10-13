'use strict';

function entry(argv) {
  if (argv[2] !== '-a' && argv[2] !== '--add') {
    console.log('This is Not a Valid Entry!!');
  } else if (!argv[3]) {
    console.log('This is not a Valid Entry, must leave a note');
  } else {
    console.log('This is Valid Entry!');
    return new Note(argv);
  }
}

function Note(argv) {
  this.action = argv[2];
  this.payload = argv[3];
}

module.exports = entry;