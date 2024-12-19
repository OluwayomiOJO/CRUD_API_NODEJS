const noteService = require('../services/noteService')


module.exports = {
  create(req, res) {
    const note = noteService.createNote(req.body);
    res.status(201).json(note);
  },
  getAll(req, res) {
    try {
        const search = req.query.search || ''; // Get the search string from query params
        const notes = noteService.getAllNotes(search);
        res.status(200).json(notes);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  },
  getById(req, res) {
    try {
        const note = noteService.getNoteById(req.params.id);
        if (!note) {
          return res.status(404).json({ error: 'Note not found' });
        }
        res.status(200).json(note);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  },
  update(req, res) {
    try {
        const updatedNote = noteService.updateNote(req.params.id, req.body);
        if (!updatedNote) {
          return res.status(404).json({ error: 'Note not found' });
        }
        res.status(200).json(updatedNote);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  },
  delete(req, res) {
    try {
        const deletedNote = noteService.deleteNote(req.params.id);
        if (!deletedNote) {
          return res.status(404).json({ error: 'Note not found' });
        }
        res.status(200).json(deletedNote);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
};
