const express= require('express');
const router = express.Router();
const userController= require('../controllers/user.controllers');
const multer=require('multer');
const path=require('path')




let multerDiskStorage = multer.diskStorage({
    destination:(req,file,callback) =>
    {let folder = path.join(__dirname,'../public/userImg');
    callback(null,folder)
},
    filename:(req,file,callback) => {
        let imageName = Date.now() + path.extname(file.originalname);
        callback(null,imageName)
    }
})
let fileUpload = multer({storage:multerDiskStorage})

router.get('/register', userController.getRegister);
router.post('/register', fileUpload.single('imagenUsuario'),userController.postUser);

router.get('/login', userController.getLogin);
router.post('/login', userController.postLogin);



module.exports=router;