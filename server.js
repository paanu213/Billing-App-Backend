const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const serviceRoutes = require('./routes/serviceRoutes')
const invoiceRoutes = require('./routes/invoiceRoutes')
const cors = require('cors')

const app = express();

const PORT = process.env.PORT || 5000;

dotEnv.config()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log(`the mongo db is connected to our server`)
    })
    .catch ((error)=>{
        console.log(`error message: ${error}`)
    })


app.use('/services', serviceRoutes)
app.use('/invoice', invoiceRoutes)



app.listen(PORT, ()=>{
    console.log(`this app is running on port: ${PORT}`)
})