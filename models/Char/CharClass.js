const {DataTypes} = require('sequelize');
const conn = require('../../db/conn');
const Char = require('./Char');

const CharClass = conn.define('CharClasses',{
    class_name:{
        type:DataTypes.STRING
    }
})




module.exports = CharClass