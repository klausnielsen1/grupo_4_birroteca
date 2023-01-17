const express = require('express');
const router = express.Router();
const mainController=require('../controllers/mainContollers')


router.get('/login',mainController.login);
router.get('/product',mainController.detail);
router.get('/register',mainController.register);
router.get('/carrito',mainController.carrito);
router.get('/',mainController.index);
router.get('/admin',mainController.product);

router.get('/create',mainController.create );
router.get('/products/edit/:id/',mainController.edit);

module.exports = router