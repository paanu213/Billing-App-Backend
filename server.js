const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')

const app = express();

dotEnv.config()

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log(`the mongo db is connected to our server`)
}
)
.catch ((error)=>{
console.log(`error message: ${error}`)
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`this app is running on port: ${PORT}`)
})