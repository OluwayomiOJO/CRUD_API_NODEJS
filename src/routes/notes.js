const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');
const validateNote = require('../middlewares/validateNote');

router.post('/', validateNote, noteController.create); 
router.get('/', noteController.getAll); // retrive all notes , validattion not needed
router.get('/:id', noteController.getById); // individual note
router.patch('/:id', validateNote, noteController.update); // add validate middleware 
router.delete('/:id', noteController.delete);

module.exports = router;
