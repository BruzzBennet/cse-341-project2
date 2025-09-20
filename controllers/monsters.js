const mongodb = require("../data/database");
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req,res) =>{
    const result = await mongodb.getDatabase().db().collection("monsters").find();
    result.toArray().then((users) =>{
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(users);
    });
};

const getSingle = async (req,res) =>{
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection("monsters").find({_id: userId});
    result.toArray().then((users) =>{
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(users[0]);
    });
};

const createUser = async(req,res)=>{
    const user ={
        name: req.body.name,
        cost_1: req.body.cost_1,
        cost_2: req.body.cost_2,
        type: req.body.type,
        value_id: req.body.value_id,
        base_stats: req.body.base_stats,
        equip_stats: req.body.equip_stats,
        equip_name: req.body.equip_name,
        ability_condition: req.body.ability_condition,
        ability: req.body.ability
    };
    const response= await mongodb.getDatabase().db().collection("monsters").insertOne(user);
    if(response.acknowledged){
      res.status(204).send();
    }
    else
    {
      res.status(500).json(response.error || "Some error ocurred while updating the user");
    }
}

const updateUser = async(req,res)=>{
    const userId = new ObjectId(req.params.id);
    const user ={
        name: req.body.name,
        cost_1: req.body.cost_1,
        cost_2: req.body.cost_2,
        type: req.body.type,
        value_id: req.body.value_id,
        base_stats: req.body.base_stats,
        equip_stats: req.body.equip_stats,
        equip_name: req.body.equip_name,
        ability_condition: req.body.ability_condition,
        ability: req.body.ability
    };
    const response= await mongodb.getDatabase().db().collection("monsters").replaceOne({_id: userId}, user);
    if(response.modifiedCount > 0){
      res.status(204).send();
    }
    else
    {
      res.status(500).json(response.error || "Some error ocurred while updating the user");
    }
}

const deleteUser = async(req,res)=>{
    const userId = new ObjectId(req.params.id);
    const response= await mongodb.getDatabase().db().collection("monsters").deleteOne({_id: userId});
    if(response.deletedCount > 0){
      res.status(204).send();
    }
    else
    {
      res.status(500).json(response.error || "Some error ocurred while updating the user");
    }
}

module.exports = {
    getAll,
    getSingle,
    createUser,
    updateUser,
    deleteUser
}