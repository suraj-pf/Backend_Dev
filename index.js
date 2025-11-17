// import express from "express"
const express = require('express')
 
const app = express()
const port = 4000

app.get('/',(req,res) => {
    res.send('Hello world')
})
app.get('/twitter',(req,res) => {
    res.send('Epil codes')
})

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`);  
})