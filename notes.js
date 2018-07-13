console.log('Starting Notes.js');

var addNote = (title, body) => {
    console.log('Add One Note',title,body);
    return 'New Note';
};
var removeNote = (title) => {
    console.log('Remove One Note', title);
    return 'Removed Note';
};
var getNote = (title) => {
    console.log('get All Notes',title);
    return 'Get All Note';
};
var getList = () => {
    console.log('get All Notes');
    return 'Get All Notes';
};


module.exports = {
    addNote,
    removeNote,
    getNote,
    getList
};