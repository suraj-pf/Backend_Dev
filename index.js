// import express from "express"
const express = require('express')
require('dotenv').config()


const app = express()
const port = 4000 // what if that port is busy in another persons lapy

const githubData = {
    'user' : 'surajmore',
    'id' : 16
}

app.get('/',(req,res) => {
    res.send('Hello world')
})

app.get('/twitter',(req,res) => {
    res.send('Epil codes')
})

app.get('/login',(req,res) => {
    res.send('<h1>Please Signup first <h1>')
})

app.get('/youtube',(req,res) => {
    res.json(githubData)
})

app.listen(process.env.port,() => {
    console.log(`Example app listening on port ${port}`);  
})