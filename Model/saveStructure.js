const mongoose=require("mongoose")

const SaveStructure=mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    Bookmark:[{
            recipeid:{
                type:String,
                required:true, 
            },
            img:{
                type:String,
                required:true, 
            },
            source:{
                type:String,
                required:true, 
            },
            label:{
                type:String,
                required:true,
            },
            yield:{
                type:String,
                required:true, 
            }
        }]
})

const save=mongoose.model("saves",SaveStructure)
module.exports=save;