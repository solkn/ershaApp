const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const http = require("http");
const cors = require("cors");



dotenv.config();

const app = express();

mongoose.connect(process.env.DB_CONNECTION,{
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("database is connected successfully!!");
})

app.use(cors());

app.use(express.json());


/**
 * Route Middleware
 */



 app.use("*", (req, res, next) => {
    res.status(400).json({
      status: "error",
      message: `The requested url ${req.originalUrl} does not exist`,
    });
  });
  
  app.listen(process.env.PORT, () => {
    console.log(`Server is running at port: ${process.env.PORT}`);
  });