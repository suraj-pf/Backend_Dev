const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

app.use(express.json());
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.render('index');
});


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});