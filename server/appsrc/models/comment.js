const mongoose = require('mongoose')
const validator = require('validator')


const commentSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true
    
  },
  sex:{
    type:String,
    required: true
  },
  email:{
    type:String,
    required: true,
    
    unique:[true,'Email id  is present please use another one'],
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error('invalid email')
      }
    }
  },
  comment:{
    type:String,
    required: true
  },
  star:{
    type:Number,
    required: true
  },
  
  time : { type : Date, default: Date.now }

  
})
const Comment = new mongoose.model('Comment',commentSchema)

module.exports = Comment
