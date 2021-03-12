const db = require("../models");

// /api/v1/users
const index = async (req,res)=>{
  users = await db.user.findAll();
  console.log(users);
  res.json(users)
}

const show = async (req,res)=>{
  current_user = await db.user.findOne({where:{id:req.params.id}});
  console.log(current_user)
  res.json(current_user)
}

module.exports = {
  index,
  show,
};