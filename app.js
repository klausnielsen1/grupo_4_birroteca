const express=require('express');
const path=require('path');

const mainRouter=require('./routes/mainRoutes');
const  userRouter= require('./routes/user.routes'); 

const methodOverride=require('method-override');
const cookieParser= require ('cookie-parser');
const multer=require('multer');

const sessionMiddleware = require('./middlewares/sessionMiddleware');
const session=require('express-session');

const app=express();

//MIDDLEWARES//
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(session({
    secret: 'hola',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
  }));

//no mover
app.use(sessionMiddleware);

//view engine setup
app.set('view engine','ejs');
app.set('views','./views');

//RUTAS//
app.use('/users', userRouter);
app.use(mainRouter);
app.use(userRouter);


//PUERTO//
let PORT = 3001;
app.listen(PORT,()=>console.log("Servidor funcionando en el servidor"+PORT))






