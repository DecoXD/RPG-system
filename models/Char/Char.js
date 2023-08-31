const {DataTypes} = require('sequelize');
const conn = require('../../db/conn');
const Account = require('../auth/Account');
const CharClass = require('./CharClass');

const Char = conn.define('Chars',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }

})

Account.hasMany(Char,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE",
})
Char.belongsTo(Account, {
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
    })

CharClass.hasMany(Char,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})// uma classe tem muitos personagens que pertencem a ela;
Char.belongsTo(CharClass,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})// um personagem por exemplo pode pertencer a uma classe de magos;


module.exports = Char