const Account = require("../../models/auth/Account")


const isValidUser = async (id) => {
  
    let user;
    try {
         user = await Account.findOne({where:{
            id
        }})        
    } catch (error) {
        return null
    } finally{
        if(!user){
            return null
        }
        return true
    }
}

module.exports = isValidUser