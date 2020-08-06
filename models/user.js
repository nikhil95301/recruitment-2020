const mongoose = require('mongoose')
const validator = require('validator')
const nodemailer = require('nodemailer')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
       // unique:true,
        type:String,
        required:true,
        trim:true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('email is no valid')
            }
        }
    },
    contact_number:{
        type:Number,
        required:true,
        min:1000000000,
    max:9999999999
    },
whatsapp_number:{
    type:Number,
    required:true,
    min:1000000000,
    max:9999999999
},
skills:{
    type:String,
    required:true
},
branch:{
    type:String,
    required:true
},
student_number:{
type:Number,
required:true
},
roll_number:{
    type:Number,
    required:true
}
})
userSchema.methods.mail = async function(){
const user = this

const email = user.email
  const transporter = nodemailer.createTransport({
      service:'Gmail',
      auth:{
            user:process.env.id,
          pass:process.env.password
      }
  })
const  mailOptions = {
    from: 'Nikhil conatus',
    to: email,
    subject: "Conatus Recruitment 2020",
    text: "you have successfully registered yourself"
  }
     transporter.sendMail(mailOptions)
     return 200;
   //  res.status(200).send('you must have received registration confirmation message')
}

const User = mongoose.model('User',userSchema)
module.exports = User