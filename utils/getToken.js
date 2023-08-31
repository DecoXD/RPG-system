const getToken = (req) => {
    const authToken = req.headers.authorization
    if(!authToken){
        return null
    }
    const token = authToken.split(' ')[1]
    
    return token

}

module.exports = getToken