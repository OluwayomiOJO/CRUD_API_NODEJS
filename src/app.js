const express = require('express');
const noteRoutes = require('./routes/notes');

const app = express();

app.use(express.json());

app.use('/notes', noteRoutes);

module.exports = app;
