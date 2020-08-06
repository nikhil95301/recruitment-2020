const User = require('../models/user')
const express = require('express')
const app = new express.Router()
app.post('/user',async(req,res) =>{
    try{
    const user = new User(req.body)
   // console.log(user)
await user.save()
const v = await user.mail()
res.send("you must have received confirmation mail")
  }
  catch(e){
      //res.send('Check your details, and email should not be repeated')
      //throw new Error
      res.status(400).send(e.message)
console.log(e)
  }
})
module.exports = app