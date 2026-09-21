const express = require('express');

const app = express();

app.use(express.json());

const usersRouter = require('./usersRouter');

app.use('/users', usersRouter);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});