const db = require("../models");

// /api/v1/users
const index = async (req,res)=>{
  const users = await db.user.findAll();
  res.json(users)
}

const show = async (req,res)=>{
  const currentUser = await db.user.findOne({where:{id:req.params.id}});
  res.json(currentUser)
}

const create = async (req,res)=>{
  const newUser = await db.user.create(req.body);
  const userData = await db.user.findOne({where:{id:newUser.id}})
  res.json({'Added User':userData});
}

const destroy = async (req,res) =>{
  const deletedUser = await db.user.findOne({where:{id:req.params.id}});
  await deletedUser.destroy();
  res.json({"Deleted User":deletedUser});
}

module.exports = {
  index,
  show,
  create,
  destroy,
};