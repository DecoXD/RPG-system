const express = require('express');
const app = express()
//conection
const conn = require('./db/conn');
const port = 5000
//cors
const cors = require('cors')

//MODELS
//auth - START MODELS BLOCK
const Account = require('./models/auth/Account');

//charModels
const Char = require('./models/Char/Char');
const CharClass = require('./models/Char/CharClass');

// END MODELS BLOCK


//routes
const authRouter = require('./routes/AuthRoutes');
const charRouter = require('./routes/CharRoutes');





app.use(express.json())
    

app.use('/char',charRouter)
app.use('/',authRouter)


conn.sync().then(() =>{
    app.listen(port)
})
