const service = require("./service");

const resObj = function(state,message,data){
 return{
  success: state,
  message: message,
  data: data
 }
}

module.exports = {
  add: (req,res) => {
    const body = req.body;

    service.add(body,(err,result)=>{
      return res.json(
        err
        ?err
        :resObj(1,"Successfully added.",result)
      );
    });
  }, 
  update: (req,res)=>{
    const id = req.params.id;
    const data = req.body;
        
    service.update(id,data,(err,result)=>{
      return res.json(
        err
        ?err
        :resObj(1,"Succesfully updated.",result)
      );
    });
  }, 
  delete: (req,res)=>{      
    const id = req.params.id;

    service.delete(id,(err,result)=>{      
      return res.json(
        err
        ?err
        :resObj(1,"Successfully deleted",result)
      );
    });
  }, 
  get: (req,res)=>{      
    const id = req.params.id;
    
    service.get(id,(err,result)=>{
      let resJson;

      if (err) 
        resJson = err;
      else if (!result) 
        resJson = resObj(0,"Don't exists",null);
      else 
        resJson = resObj(1,"exists",result);
      
      return res.json(resJson);
    });
  },
  getAll: (req,res)=>{
    service.getAll((err,results)=>{
      let resJson;
      if (err)
        resJson = err;
      else if (!results)
        resJson = resObj(0,"Not Found",null);
      else 
        resJson = resObj(1,"Users data",results);

      return res.json(resJson);
    });
  }
}