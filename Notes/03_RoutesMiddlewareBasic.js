const express = require('express');
const app = express();

// Middleware that logs a message for every incoming request
app.use(function (req, res, next) {
    console.log('Keep going...');
    next();
});
app.use(function (req, res, next) {
    console.log('Keep move out...');
    next();
});

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/profile', (req, res) => {
    res.send('Profile Page');
});

app.get('/error', (req, res) => {
    return next(new Error('Deliberate Error'));
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000, () => {
    console.log('Express server is listening on port 3000 for now');
});