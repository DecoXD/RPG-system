const Char = require("../models/Char/Char");
const isValidUser = require("../utils/auth/isValidUser");


const getToken = require("../utils/jwt/getToken");
const getUserIdByToken = require("../utils/jwt/getUserIdByToken");

module.exports = class CharController {

 static async create(req,res){
   //pull body data 
 
   const {name,
      classe,
      str,
      abl,
      int,
      esp,
      arm,
      resist,
      level,
      exp,
      points,
      nextLevel,
      AdventureId
   } = req.body;

   console.log(name)
   //get token
   //get userId by token
   const token = getToken(req)

   const userId = await getUserIdByToken(token)
   
    const userExists =await isValidUser(userId)
   if(!userExists){
      res.status(401).json({message:'usuário nao autenticado'})
      return
   }
   
   //checkar se nome existe na aventura


   const charData = {
      name,
      classe,
      str,
      abl,
      int,
      esp,
      arm,
      resist,
      level,
      exp,
      points,
      nextLevel,
      AdventureId,
      AccountId:userId
   }
  
   try {
      const newChar = await Char.create(charData)
      res.status(200).json({message:`o personagem ${newChar.name} foi criado com sucesso`,char:newChar})
   } catch (error) {
      res.status(401).json({message:'não foi possivel criar o personagem',error:error.message})
      return
   }
    
    

 }

}