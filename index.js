const express = require('express');
const app = express()
//conection
const conn = require('./db/conn');
const port = 5000
//cors
const cors = require('cors')

//models
//auth
const Account = require('./models/Account');

//charModels
const Char = require('./models/Char');
const CharAtt = require('./models/CharAtt');

//routes
const authRouter = require('./routes/AuthRoutes');




app.use(express.json())
    

app.use('/',authRouter)


conn.sync().then(() =>{
    app.listen(port)
})
