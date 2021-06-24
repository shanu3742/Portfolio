const express = require('express')
const app = express()
require('./db/conn')
const port =process.env.PORT || 3011
const Comment = require('./models/comment')

app.use(express.json())

app.get('/' ,(req,res) => {
  res.send("listen")
})


app.post('/Comments', async (req,res) => {
   try{
     const user= new  Comment(req.body)
     
     const createComment = await user.save()
    
     res.send(createComment)

   }catch(err){
     res.send(err)


   }
})
app.listen(port,() => {
  console.log("connection is setup")
})
