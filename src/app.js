//server configure krna
const express=require("express")
const cors=require('cors')
const notesRoute = require("./routes/notes.routes")

const app=express() //server instance create 
app.use(express.json())
app.use(express.static('./public'))
app.use(cors())

app.use('/api',notesRoute)
 

module.exports=app