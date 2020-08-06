const express = require('express')
require('./db/mongoose')
require('dotenv').config()
const app = express()
const port = process.env.PORT||3000

const userrouter = require('./routers/app')
app.use(express.json())
app.use(userrouter)
app.listen(port,(e) =>{
    if(e)
    console.log('erro from listen'+e)
    console.log('port is on 3000')
})