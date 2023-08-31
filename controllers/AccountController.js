const Account = require("../models/auth/Account");
const bcrypt = require('bcrypt');
const createUserToken = require("../utils/createUserToken");
const TableDoesntExists = require("../custom_exceptions/TableDoesntExists");
const getUserByParam = require("../utils/auth/getUSerByParam");

module.exports = class AccountController{

    static async login(req,res) {
        const {login,password} = req.body;
        
        //check if exists
        const user = await getUserByParam('login',login)

        if(!user){
            res.status(401).json({message:'dados incorretos'});
            return    
        }
        
        //check if password match

        const passwordMatch = bcrypt.compareSync(password,user.password_hash)

        if(!passwordMatch){
            res.json(401).json({message:'dados incorretos'})
            return
        }

        //create a token
        try {
            const token = await createUserToken(user)
            res.status(200).json({message:'logado com sucesso',token})
            return
        } catch (error) {
            res.status(401).json({message:error.message})
            return
        }

        

    }

    static async register(req,res) {
        
        const {name,login,password,confirmPassword} = req.body;

        const userData = {
            name,
            login,
            password_hash: password
        }

        //check if all fields are ok
        const values = Object.values(userData)
        for(let value of values){
            if(!value){
                res.status(400).json({message:'preencha todos os campos'})
                return
            }
        }

        //check if user exists
        let user = ''
        try {
            user = await getUserByParam('login',login)
        } catch (error) {
            res.status(501).json({message:'ocorreu algum erro tente novamente mais tarde',error:error.message})
            return
        }

        if(user){
            res.status(409).json({message:'login nao aceito'})
            return
        }
        
        //check if password match

        if(password !== confirmPassword){
            res.status(409).json({message:'confirma a senha corretamente'})
            return
        }

        const salt =bcrypt.genSaltSync(12);
        userData.password_hash = bcrypt.hashSync(password,salt)

        try {
            const newUser = await Account.create(userData)
            
            const token = await createUserToken(newUser)
            res.status(200).json({message:'usuário criado com sucesso',token,newUser})
            return
        } catch (error) {
            res.status(401).json({message:error.message})
            return
        }


    }

}