const {
  client,
  ObjectID
} = require("../dbconfig/mongo.js");
 
const CollectionName = client().db("DBName").collection("CollectionName");

module.exports = {
  add: (data, callBack)=>{
    CollectionName.insertOne(data, function(err, result){      
      return callBack(err,result.ops);      
    });
  },
  update: (id,data,callBack) =>{    
    CollectionName.updateOne({"_id": ObjectID(id)},{$set:data}, function(err, result){
      return callBack(err,result.ops);
    });
  },
  delete: (id,callBack) =>{
    CollectionName.deleteOne({"_id": ObjectID(id)}, function(err, result){
      return callBack(err,result.ops);
    });
  },
  get: (id,callBack) =>{
    CollectionName.findOne({id:id}, (err,result)=>{
      return callBack(err,result.ops);
    });
  },  
  getAll: (callBack) =>{
    CollectionName.find().toArray(function(err, results){
      return callBack(err,results);
    });
  }
};