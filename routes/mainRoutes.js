const express = require('express');
const router = express.Router();
const mainController=require('../controllers/mainContollers')


router.get('/carrito',mainController.carrito);

router.get('/',mainController.index);

router.get('/admin',mainController.product);

router.get('/products/create',mainController.create );




router.get('/products/:id/edit',mainController.edit);
router.put('/products/:id/edit',mainController.update);

router.get('/products/:id',mainController.detail );
router.post('/products/create',mainController.crear)
router.delete('/:id', mainController.delete)

//**************modificaciones 29/03

//ruta para LIST
//router.get('/productos', mainController.list)


//ruta para agregar un producto
//router.get('/products/create', mainController.add);
//router.post('/products/create', mainController.create) //esta es la ruta que figura en el formulario de creación 



//rutas para la creación de CRUD
//(mainController.add)
//(mainController.create)


//(mainController.edit)
//(mainController.update)
//(mainController.delete)
///mainController.destroy)

module.exports = router
