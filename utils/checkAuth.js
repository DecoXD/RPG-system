const jwt = require("jsonwebtoken");

function checkToken(req,res,next){
   const authToken =  req.headers.authorization;
   if(!authToken){
    res.status(401).json({message:'usuário nao autenticado'})
    return
   }
   try {
    const token = jwt.verify(authToken,'dorfinha')
    res.status(200).json({message:'usuário autenticado com sucesso',token})
    next()
   } catch (error) {
    res.status(401).json({message:'token inválido'})
    return
   }

}


module.exports = checkToken