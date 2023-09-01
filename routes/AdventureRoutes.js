const {Router} = require('express');
const router = Router()
const AdventureController = require('../controllers/AdventureController');
const checkToken = require('../utils/jwt/checkToken');


router.post('/create',checkToken,AdventureController.create)
router.post('/:adventureId/',checkToken,AdventureController.enter)



module.exports = router