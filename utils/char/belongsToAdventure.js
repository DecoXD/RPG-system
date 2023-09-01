const Char = require("../../models/Char/Char")
const {Op} = require('sequelize')

const belongsToAdventure = async (AccountId,AdventureId) => {
try {
    const char = await Char.findAll({raw:true,where:{
        [Op.and]:[{AccountId},{AdventureId}]    
     }})
     if(!char){
        return null
     } 
     return char
} catch (error) {
    return null
} 
}

module.exports = belongsToAdventure
