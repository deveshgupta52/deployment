const mongoose=require('mongoose')


const connectToDb=()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("database connected")
    }).catch((err) => console.log(err));
    
}

module.exports=connectToDb