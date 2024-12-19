const request = require('supertest');
const noteModel = require('../src/models/noteModel')
const noteService = require('../src/services/noteService');

describe('Note Service - Create Note', () => {
  it('should create a new note with valid data', () => {
    const data = { title: 'Test Note', content: 'This is a test note' };
    const note = noteService.createNote(data);

    expect(note).toHaveProperty('id');
    expect(note).toHaveProperty('createdAt');
    expect(note).toHaveProperty('updatedAt');
    expect(note.title).toBe(data.title);
    expect(note.content).toBe(data.content);
  });

  it('should create a note with an empty content if not provided', () => {
    const data = { title: 'Test Post' };
    const note = noteService.createNote(data);

    expect(note.content).toBe('');
  });



});
