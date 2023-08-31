const TableDoesntExists = require("../../custom_exceptions/TableDoesntExists")


const getUserByParam = async (param,value) => {
    try {
        const user = await Account.findOne({raw:true,where:{
            [param]:value
        }})
        if(user.length!=0){
            return user
        }
    } catch (error) {
        if(error.message.includes('exist')){
            throw new TableDoesntExists('account')
        } else {
            return null
        }
        
    }
}

module.exports =  getUserByParam