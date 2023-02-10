const express= require('express');
const router = express.Router();
const userController= require('../controllers/user.controllers');

router.get('/', userController.getRegister);
router.post('/', userController.postUser);

router.get('/login', userController.getLogin);
router.post('/login', userController.postLogin);



module.exports=router;