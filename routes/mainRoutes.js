const express = require('express');
const path = require('path');
const router = express.Router();
const mainController=require('../controllers/mainContollers');
const multer=require('multer');
const {body}=require('express-validator')



const validateCreateForm = [
    body('name').notEmpty().withMessage('Debes completar el campo de nombre'),
    body('category').notEmpty().withMessage('Debes seleccionar una de las dos opciones'),
    body('descripcion').notEmpty().withMessage('Debes seleccionar una fecha'),
    body('productImg').notEmpty().withMessage('Debes agregar una descripcion'),
    body('precio').notEmpty().withMessage('Debes determinar el precio del producto')
]


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../public/productImg"));
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  const upload = multer({ storage });

router.get('/',mainController.index);

router.get('/carrito',mainController.carrito);

router.get('/products/create',mainController.add );
router.post('/products/create',upload.single('productImg'),validateCreateForm,mainController.create)


router.get('/products/edit/:id',mainController.edit);
router.put('/products/edit/:id',upload.single('productImg'),mainController.update);

router.get('/products/:id',mainController.detail);

router.delete('/products/delete/:id', mainController.delete)






module.exports = router

