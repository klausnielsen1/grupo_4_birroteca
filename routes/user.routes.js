const express= require('express');
const router = express.Router();
const userController= require('../controllers/user.controllers');

router.get('/register', userController.getRegister);
router.post('/register', userController.postUser);

router.get('/login', userController.getLogin);
router.post('/login', userController.postLogin);



module.exports=router;