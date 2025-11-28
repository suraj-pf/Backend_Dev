const express = require('express');
const path = require('path');
const userModel = require('./models/user')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/create', async (req, res) => {
    let { name, email, imageurl } = req.body;
    let user = await userModel.create({
        name: name,
        email: email,
        image: imageurl
    });
    res.redirect('/read');
});

app.get('/read', async (req, res) => {
    const users = await userModel.find();
    res.render('read', { users });
});

app.get('/edit/:userid', async (req, res) => {
    let user = await userModel.findOne({_id:req.params.userid})
    res.render('edit', { user });
});

app.post('/edit/:userid', async (req, res) => {
    const { name, email, imageurl } = req.body;
    await userModel.findByIdAndUpdate(req.params.userid, {
        name: name,
        email: email,
        image: imageurl
    }, { new: true });
    res.redirect('/read');
});

app.get('/delete/:userid', async (req, res) => {
    await userModel.findByIdAndDelete(req.params.userid);
    res.redirect('/read');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
