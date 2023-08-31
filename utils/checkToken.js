const jwt = require("jsonwebtoken");

function checkToken(req,res,next){
   const authToken =  req.headers.authorization;
   if(!authToken){
    res.status(401).json({message:'usuário nao autenticado'})
    return
   }
   const secret = 'dorfinha'  
    const token = authToken.split(' ')[1]
   try {
    const tokenVerify = jwt.verify(token,secret)
    next()
   } catch (error) {
    res.status(401).json({message:'token inválido'})
    return
   }

}


module.exports = checkToken