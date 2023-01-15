const express = require('express')

const dotenv = require('dotenv').config()

const cors = require("cors");

const {emailRouter} = require('./route/emailRoute')

const PORT = process.env.PORT

const app = express()

app.use(express.json());

app.use(cors())


app.use(express.urlencoded({ extended: false }));

app.use('/',emailRouter)

app.listen(PORT, ()=>{
    console.log(`Connected to server @ port ${PORT} 😎🥰🎁` );
})