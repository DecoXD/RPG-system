const {Sequelize} = require('sequelize')

const conn = new Sequelize('rpg','root','',{
    dialect:'mysql',
    host:'localhost'
})

conn.authenticate().then(() => {
    console.log('conectado')
}).catch(() => {
    console.log('nao conectado')
})

module.exports = conn