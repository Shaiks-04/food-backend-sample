  const express = require("express");
  const cors=require("cors");
  const app = express();
  
  app.use(cors())
  app.use(express.json())
  
  const mongoose = require("mongoose");
  mongoose.set("strictQuery", true);
  const url = "mongodb+srv://shaikrahaman04:shaik123@cluster0.fqimvvo.mongodb.net/?retryWrites=true&w=majority";
  const connection=require("./config/mongoose")
  
  const user=require("./route/userroute")
  const recipe=require("./route/recipeRoutes")
  const save=require("./route/saveroute")
  app.use('/api',recipe)
  app.use('/api',user)
  app.use('/api',save)
  
  app.get("/", (req, res) => {
      res.send({ msg: "this is a testing phase" });
  });
  
  app.listen(3002, async () => {
      try {
          await connection(url);
          console.log("server running on port 3002");
      } catch (err) {
          console.log(err, "error occurred in running");
      }
  });
  