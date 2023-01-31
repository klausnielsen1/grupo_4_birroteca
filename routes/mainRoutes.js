const express = require('express');
const router = express.Router();
const mainController=require('../controllers/mainContollers')


router.get('/login',mainController.login);

router.get('/products',mainController.index);

router.get('/register',mainController.register);

router.get('/carrito',mainController.carrito);

router.get('/',mainController.index);

router.get('/admin',mainController.product);

router.get('/products/create',mainController.create );




router.get('/products/:id/edit',mainController.edit);
router.put('/products/:id/edit',mainController.update);

router.get('/products/:id',mainController.detail );
router.post('/products/create',mainController.crear)
router.delete('/:id', mainController.delete)

module.exports = router
