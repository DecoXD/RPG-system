const jwt = require("jsonwebtoken")
const secret = require("./scrt")


const getUserByToken = async (token) => {
    
    try {
        const decoded = jwt.decode(token)
        return decoded.id
    } catch (error) {
        //erro aqui colocar talvez
        return null
    }
    
}

module.exports = getUserByToken