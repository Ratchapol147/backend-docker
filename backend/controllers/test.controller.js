
const uuid = require("uuid");
const Data = require("../models/model.model")


exports.getall =async (req,res,next)=>{
  try{
    const [data] = await Data.getall()
    res.status(200).send({message:data})
  }catch(err){
    console.log(err);
    res.status(500).send({err:0,message:err})
  }
}

exports.input = async (req,res,next) =>{
  const {test} = req.params
  res.status(200).send({message:test})
}
