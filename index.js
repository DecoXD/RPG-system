const express = require('express');
const app = express()
//conection
const conn = require('./db/conn');
const port = 5000
//cors
const cors = require('cors')

//MODELS START MODELS BLOCK
// auth - 
const Account = require('./models/auth/Account');

// char Models
const Char = require('./models/Char/Char');

// Adventure Models
const Adventure = require('./models/adventure/Adventure');
// END MODELS BLOCK

//routes
const authRouter = require('./routes/AuthRoutes');
const charRouter = require('./routes/CharRoutes');
const adventureRouter = require('./routes/AdventureRoutes');

//cors
app.use(cors())
//allow body request
app.use(express.json())
    
//routes
app.use('/adventure',adventureRouter);
app.use('/char',charRouter);
app.use('/',authRouter);

conn.sync().then(() =>{
    app.listen(port)
})
