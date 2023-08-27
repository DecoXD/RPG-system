const {DataTypes} = require('sequelize');
const conn = require('../db/conn');
const Account = conn.define("Accounts",{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    login:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    password_hash:{
        type:DataTypes.STRING,
        allowNull:false
    }
})


module.exports = Account
