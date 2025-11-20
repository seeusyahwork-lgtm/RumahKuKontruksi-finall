// src/app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const projectsRouter = require('./routes/projects');
// const authRouter = require('./routes/auth');

const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// Routes
app.use('/api/projects', projectsRouter);
// app.use('/api/auth', authRouter);

app.use(errorHandler);

module.exports = app;
