
// the business logic where crud takes place
const { v4: uuidv4 } = require('uuid');
const noteModel = require('../models/noteModel')

module.exports = {
  createNote(data) {
    const { title, content } = data;
    const newNote = {
      id: uuidv4(),
      title,
      content: content || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return noteModel.create(newNote);
  },
  getAllNotes(search = "") {
     // load  the notes here
    const getAllNotes = noteModel.getAll();
    if (!search) {
      return getAllNotes;
    }
     
    return getAllNotes.filter(
      note =>
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.content.toLowerCase().includes(search.toLowerCase())
    );


  },


  getNoteById(id) {
    return noteModel.getById(id);
  },

  updateNote(id, data) {
    return noteModel.update(id, { ...data, updatedAt: new Date().toISOString() });
  },
  deleteNote(id) {
    return noteModel.delete(id);
  },
};
