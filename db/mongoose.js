const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.mon,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true

})
console.log('connected')