const mongoose=require("mongoose")
const userStructure=mongoose.Schema({
    Email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const user=mongoose.model("Recipe_User",userStructure)
module.exports=user;