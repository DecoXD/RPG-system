const Char = require("../models/Char/Char");

const getToken = require("../utils/jwt/getToken");
const getUserIdByToken = require("../utils/jwt/getUserIdByToken");

module.exports = class CharController {

 static async create(req,res){
    //pegar o usuario pelo token

    //pegar token
   const token = getToken(req)
   const userId = await getUserIdByToken(token)
    //uma aventura pode ter varios personagens
    //uma conta pode ter varios personagens em uma aventura mas obviamente eles resetam
    
    

 }

}