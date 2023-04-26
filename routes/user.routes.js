const express= require('express');
const router = express.Router();
const userController= require('../controllers/user.controllers');
const multer=require('multer');
const path=require('path');
const {body}=require('express-validator')



// const validateCreateForm = [
//     body('nombre').notEmpty().withMessage('Debes completar el campo de nombre'),
//     body('usuario').notEmpty().withMessage('Debes completar el campo de usuario'),
//     body('email').isEmail().withMessage('Debes completar un email valido'),
//     body('fecha').notEmpty().withMessage('Debes seleccionar una fecha'),
//     body('imagenUsuario').notEmpty().withMessage('Debes seleccionar una imagen'),
//     body('password').notEmpty().withMessage('Debes completar el campo de Contraseña')
// ]


let multerDiskStorage = multer.diskStorage({
    destination:(req,file,callback) => {
    let folder = path.join(__dirname,'../public/userImg');
    callback(null,folder)
},
    filename:(req,file,callback) => {
        let imageName = Date.now() + path.extname(file.originalname);
        callback(null,imageName)
    }
})
let fileUpload = multer({storage:multerDiskStorage})

router.get('/register', userController.getRegister);
router.post('/register', fileUpload.single('userImg'),userController.postUser);

router.get('/login', userController.getLogin);
router.post('/login', userController.postLogin);

//router.get('/usuarios',userController.listaUsuarios)

//ruta para editar un usuario//


//router.put('/products/:id/edit', userController.update);


module.exports=router;