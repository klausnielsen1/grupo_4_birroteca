const express = require('express');
const router = express.Router();
const mainController=require('../controllers/mainContollers')


router.get('/login',mainController.login);
router.get('/product',mainController.detail);
router.get('/register',mainController.register);
router.get('/carrito',mainController.carrito);
router.get('/',mainController.index);


module.exports = router