console.log('Starting Main.js');

const fs = require('fs');
const os = require('os');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
const command = argv._[0];

console.log(argv);
console.log(command);

if(command == 'add'){
    notes.addNote(argv.title, argv.body);
}else if(command == 'read'){
    notes.getNote(argv.title);
}else if(command == 'list'){
    notes.getList();
}else if(command == 'remove'){
    notes.removeNote(argv.title);
}else{
    console.log("Command Not Found");
}