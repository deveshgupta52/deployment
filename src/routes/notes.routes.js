const noteModel=require('../models/notes.model')
const express=require('express')
const notesRoute=express.Router()

notesRoute.post('/notes',async(req,res)=>{
    const {title,description}=req.body
     const note=await noteModel.create({
        title,description
     })
     res.status(201).json({
        message:"notes created success",
        note
     })
})

notesRoute.get('/notes',async(req,res)=>{
    const notes=await noteModel.find()
    res.status(200).json({
        message:"notes fetched successfully",
        notes
    })
})

notesRoute.delete('/notes/:id',async(req,res)=>{
    const id=req.params.id
    console.log(id)
    await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message:"note deleted successfully"
    })
})

notesRoute.patch('/notes/:id',async(req,res)=>{
    const {title}=req.body
    const id=req.params.id
    const note=await noteModel.findByIdAndUpdate(id,{
        title
    },
    {new:true}
)

res.status(200).json({
    message:"note updated successfully",
    note
})


})


module.exports=notesRoute