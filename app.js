console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe : 'Title of Note',
    demand : true,
    alias : 't'
}

const bodyOptions = {
    describe : 'Body of the Note',
    demand : true,
    alias : 'b'
}

const argv = yargs
  .command('add', 'Add a new Note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'list all nodes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;

var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  let allNotes = notes.getAll();
  console.log(`We have ${allNotes.length} note(s)`);
  allNotes.forEach(note => console.log(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  console.log(note);
  if (note.length > 0) {
    console.log('Note Found');
    notes.logNote(note[0]);
  } else {
    console.log('Note Not Found');
  }
} else if (command === 'remove') {
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? 'Note was Removed':'Note was Found'; 
  console.log(message);
} else {
  console.log('Command not recognized');
}
