'use strict';

const express = require('express');
const status = require('./status.js');
const app = express();
const input = require('./lib/input.js');
const note = require('./lib/notes.js');
let argv = process.argv;

let newNote = new input(argv);
let obj =  new note(newNote);
console.log(obj);

app.get('/status', (request, response) => {
  const currentStatus = status(request);
  response.status(200).json(currentStatus);
});

app.listen(process.env.PORT, () => console.log('server up') );