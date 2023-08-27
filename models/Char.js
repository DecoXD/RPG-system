const {DataTypes} = require('sequelize');
const conn = require('../db/conn');
const Account = require('./Account');

const Char = conn.define('Chars',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    classe:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

Account.hasMany(Char)
Char.belongsTo(Account)

module.exports = Char