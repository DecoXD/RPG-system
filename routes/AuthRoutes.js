const {Router} = require('express');
const checkAuth = require('../utils/checkAuth');
const AccountController = require('../controllers/AccountController');
const router = Router();




router.post('/login',AccountController.login)
router.post('/register',AccountController.register)

module.exports = router