const Adventure = require("../models/adventure/Adventure");
const EventEmitter = require('events');
const bcrypt = require('bcrypt');
const adventureExists = require("../utils/adventure/adventureExists");
const getToken = require("../utils/jwt/getToken");
const getUserIdByToken = require("../utils/jwt/getUserIdByToken");
const isValidUser = require("../utils/auth/isValidUser");
const isValidUser = require("../utils/auth/isValidUser");
const getUserByParam = require("../utils/auth/getUserByParam");
const belongsToAdventure = require("../utils/char/belongsToAdventure");
const getAdventureById = require("../utils/adventure/getAdventureById");


module.exports = class AdventureController extends EventEmitter {

    static async create(req,res){
        
        const {name,dificulty,hash_token} = req.body;       
        //checkar se a aventura ja existe com esse nome
        const exists = await adventureExists(name)        
        if(exists){
            res.status(409).json({message:'Ja existe uma aventura com esse nome'})
            return
        }
        //cryptografar o token
        const salt = bcrypt.genSaltSync(12);
        const token_hash = bcrypt.hashSync(hash_token,salt)

        //buscar id pelo token 
        const token = await getToken(req);
        const userId = await getUserIdByToken(token)

        //verificar se o usuário existe
        const validUser = await isValidUser(userId)
       
        if(!validUser){
            res.status(401).json({message:'usuário nao existe'})
            return
        }
        //criar sala 
        const adventureData = {
            name:name.toLowerCase(),
            dificulty,
            hash_token:token_hash,
            status:'in progress',
            master_id:userId
        }
    
        try {
            await Adventure.create(adventureData)
            res.status(200).json({message:'aventura criada com sucesso'})
            return
        } catch (error) {
            res.status(404).json({message:error.message})
            return
        }
    }

    static async enter(req,res){
        const {hash_token} = req.body;
        const {adventureId} = req.params;

        //checkar token de autenticação do usuario
        const token = await getToken(req);
        const userId = await  getUserIdByToken(token)

        //checar se existe personagem
        const isValidUser = await isValidUser(userId)
        if(!isValidUser){
            res.status(401).json({message:'erro de autenticação'})
            return
        } 

        //verificar se o token está correto
        const adventure = await getAdventureById(adventureId)
        const token_matches = await  bcrypt.compareSync(hash_token,adventure.hash_token) 

        if(!token_matches){
            res.status(409).json({message:'incorrect token'})
            return
        }
        //checkar se algum char do usuários pertence a essa aventura
        const char = await belongsToAdventure(userId,adventureId)
       
        // se nao ir para o formulario de criação
        if(!char){
            res.status(409).json({
                message:'não possui chars',
                char
            })
            return
        }
         //se sim abrir a ficha do char direto
         res.status(200).json({
            message:'entrou na sala',
            char
         })
         return
    } 

    
}
