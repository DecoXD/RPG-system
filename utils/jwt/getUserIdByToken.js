const jwt = require("jsonwebtoken")
const secret = require("./scrt")


const getUserIdByToken = async (token) => {
    
    try {
        const decoded = jwt.decode(token)
        return decoded.id
    } catch (error) {
        //erro aqui colocar talvez
        return null
    }
    
}

module.exports = getUserIdByToken