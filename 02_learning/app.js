const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
const userModel = require('./models/user')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/create', async (req, res) => {
    let name,email,imageurl = req.body;
    let user = await userModel.create({
        name, // name : name
        email : email,
        imageurl : imageurl
    })
    res.send(user)
});

app.get('/read', (req, res) => {
    res.render('read');
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
