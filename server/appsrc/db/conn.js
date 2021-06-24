const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/comment",{
  useCreateIndex:true,
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(() => {
  console.log("connection is success....")
}).catch( (err) => {
  console.log('no connection...')
})