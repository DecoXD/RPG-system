const {DataTypes} = require('sequelize');
const conn = require('../../db/conn');
const Account = require('../auth/Account');
const Adventure = require('../adventure/Adventure');
const Char = conn.define('Chars',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    classe:{
      type:DataTypes.STRING,
      allowNull:false
    },
    skills:{
        type:DataTypes.STRING
    },
    abl:{
        type:DataTypes.INTEGER,
        validate:{
            max:4
        }
    },
    int:{
        type:DataTypes.INTEGER,
        
    },
    esp:{
        type:DataTypes.INTEGER,
        
    },
    arm:{
        type:DataTypes.INTEGER,
        
    },
    resist:{
        type:DataTypes.INTEGER,
        
    },
    level:{
        type:DataTypes.INTEGER
    },
    exp:{
        type:DataTypes.INTEGER
        
    },
    points:{
        type:DataTypes.INTEGER
    },
    nextLevel:{
        type:DataTypes.INTEGER,
        defaultValue:100
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

Adventure.hasMany(Char,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
})
Char.belongsTo(Adventure,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
})

module.exports = Char