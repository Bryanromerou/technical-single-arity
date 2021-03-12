const db = require("../models");

// /api/v1/users
const index = async (req,res)=>{
  const users = await db.user.findAll({attributes: {exclude: ['password','email']}});
  console.log(users);
  res.json(users)
}

const show = async (req,res)=>{
  const currentUser = await db.user.findOne({where:{id:req.params.id},attributes: {exclude: ['password','email']}});
  console.log(currentUser)
  res.json(currentUser)
}

const create = async (req,res)=>{
  console.log(req.body)
  res.send('<h1>This is the Create route</h1>');
}

const destroy = async (req,res) =>{
  console.log(req.params.id);
  const deletedUser = await db.user.findOne({where:{id:req.params.id},attributes: {exclude: ['password','email']}});
  await deletedUser.destroy();
  res.json({"Deleted User":deletedUser});
}

module.exports = {
  index,
  show,
  destroy,
};