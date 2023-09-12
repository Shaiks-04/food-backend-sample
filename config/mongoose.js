const mongoose=require("mongoose")
mongoose.set("strictQuery",true)
const url="mongodb+srv://shaikrahaman04:shaik123@cluster0.fqimvvo.mongodb.net/?retryWrites=true&w=majority"
const connection=async()=>{
    try{
       await mongoose.connect(url)
        console.log("server connected with the database")
    }
    catch(err){
        console.log(err,"error connection")
    }
}
module.exports=connection;