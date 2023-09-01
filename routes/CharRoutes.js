const {Router} = require('express')
const CharController = require("../controllers/CharController");
const checkToken = require("../utils/jwt/checkToken");
const router = Router()

router.post('/create',checkToken,CharController.create)

module.exports = router