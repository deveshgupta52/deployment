const mongoose=require('mongoose')


const connectToDb=()=>{
    mongoose.connect("mongodb+srv://deveshgupta916_db_user:ZK5FekwLc4Mt7l7D@cluster0.ig7qbmc.mongodb.net/day-5")
    .then(()=>{
        console.log("database connected")
    }).catch((err) => console.log(err));
    
}

module.exports=connectToDb