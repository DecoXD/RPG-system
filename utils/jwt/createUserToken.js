const jwt = require('jsonwebtoken');

async function createUserToken(user){
    const {name,id} = user;

    const payload = {
        name
        ,id
    }

    const secret = 'dorfinha'
    const token = await jwt.sign(payload,secret)

    return token

}

module.exports = createUserToken