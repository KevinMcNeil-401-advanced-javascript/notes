'use strict';


class Input {
  constructor(argv) {
    this.action = argv[2];
    this.payload = argv[3];
    this.category = argv[5];
  }
  valid() {
    if (this.action !== '-a' && this.action !== '--add' && this.action !== '--delete' && this.action !== '--list') {
      console.log('This is Not a Valid Entry!!');
      return false;
    } else if (!this.payload) {
      console.log('This is not a Valid Entry, must leave a note');
      return false;
    } else {
      console.log('This is Valid Entry!');
      return true;
    }
  }
}

module.exports = Input;