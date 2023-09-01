const { DataTypes } = require("sequelize");
const conn = require("../../db/conn");
const Char = require("../Char/Char");
const Account = require("../auth/Account");

const Adventure = conn.define('Adventures',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    dificulty:{
        type:DataTypes.INTEGER,
        validate:{
            max:10,
            min:1
        }
    },
    hash_token:{
        type:DataTypes.STRING,
        allowNull:false  
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false  
        
    },
    
})


Account.hasMany(Adventure,{
    onDelete:'CASCADE',
    onUpdate:"CASCADE",
    
})
Adventure.belongsTo(Account)

module.exports = Adventure
