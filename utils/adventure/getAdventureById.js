const Adventure = require("../../models/adventure/Adventure")


const getAdventureById = async (adventureId) => {
 try {
    const adventure = await Adventure.findOne({raw:true,where:{
        id:adventureId
    }})
    if(!adventure){
        return null
    }
    return adventure
 } catch (error) {
    return null
 }
}

module.exports =  getAdventureById