const {Router} = require('express');
const router = Router()
const AdventureController = require('../controllers/AdventureController');
const checkToken = require('../utils/jwt/checkToken');

router.post('/create',checkToken,AdventureController.create)



module.exports = router