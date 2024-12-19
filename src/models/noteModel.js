const notes = []; // the local array for storing notes 

module.exports = {
  getAll() {
    return notes;
  },
  getById(id) {
    return notes.find((note) => note.id === id);
  },
  create(note) {
    notes.push(note);
    return note;
  },
  create(note) {
    notes.push(note);
    return note;
  },

 
  update(id, updatedNote) {
    const index = notes.findIndex((note) => note.id === id);
    if (index !== -1) {
      notes[index] = { ...notes[index], ...updatedNote };
      return notes[index];
    }
    return null;
  },
  delete(id) {
    const index = notes.findIndex((note) => note.id === id);
    if (index !== -1) {
      return notes.splice(index, 1)[0];
    }
    return null;
  },
};
