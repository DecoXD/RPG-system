const {DataTypes} = require('sequelize');
const conn = require('../db/conn');
const Char = require('./Char');

const CharAtt = conn.define('CharAtts',{
    str:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    hab:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    int:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    expt:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    arm:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    res:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    
    hp:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    
    mp:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    exp:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    level:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:1
    }
})

Char.hasOne(CharAtt)
CharAtt.belongsTo(Char)



module.exports = CharAtt