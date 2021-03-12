const db = require("../models");

// /api/v1/users
const index = async (req,res)=>{
  users = await db.user.findAll({attributes: {exclude: ['password','email']}});
  console.log(users);
  res.json(users)
}

const show = async (req,res)=>{
  current_user = await db.user.findOne({where:{id:req.params.id}});
  console.log(current_user)
  res.json(current_user)
}

const destroy = async (req,res) =>{
  console.log(req.params.id)
  res.send('<h1>This is the destroy route</h1>');
}

module.exports = {
  index,
  show,
  destroy,
};