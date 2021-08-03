const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('./configs/passport-config');
const contactsRouter = require('./routes/api/contacts');
const api = require('./routes/api');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.use('/api/contacts', contactsRouter);
app.use('/api/auth', api.auth);
app.use('/api/users', api.users);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    status: 'fail',
    code: 500,
    message: err.message,
  });
});

module.exports = app;
