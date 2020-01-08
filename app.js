require("dotenv").config();
const mongo = require("./dbconfig/mongo");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();


app.use(express.static(__dirname+"/static"));

app.use(bodyParser.json());

app.get("/",(req,res,next)=>{
  res.send(require("./page"));
});

mongo.connect(()=>{
  app.use("/obj",require("./api/router.js"));
  app.listen(process.env.APP_PORT,(err)=>{
    if (err)
      console.log("All bad");
    else
      console.log("All good");
  })
}); 