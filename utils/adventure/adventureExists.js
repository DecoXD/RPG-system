const Adventure = require("../../models/adventure/Adventure")


const adventureExists = async (adventureName) => {
   try {
    const exists  = await Adventure.findOne({where:{
        name:adventureName
    }});
    return exists.length!=0;
   } catch (error) {
    return null;
   }

}

module.exports =  adventureExists