const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const { log } = require('console');

app.use(express.json());
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    fs.readdir('./files',(err,files)=>{
        res.render('index',{files:files});
        });
});


app.post('/create',(req,res)=>{
    console.log(req.body);
    fs.writeFile(`./files/${req.body.title.split(" ").join("_")}.txt`, req.body.description, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        res.redirect('/');
    });
});


app.get('/files/:filename',(req,res)=>{
    fs.readFile(`./files/${req.params.filename}`,'utf8',(err,data)=>{
        if(err){
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.render('show',{filename:req.params.filename, content:data});
    });
});

app.get('/edit/:filename',(req,res)=>{
    fs.readFile(`./files/${req.params.filename}`,'utf8',(err,data)=>{
        if(err){
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.render('edit',{filename:req.params.filename, content:data});
    });
});

app.post('/edit/',(req,res)=>{
    fs.rename(`./files/${req.body.previous}.txt`, `./files/${req.body.newtitle}.txt`, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        res.redirect('/');
    });
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});