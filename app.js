const express=require('express');
const path=require('path');
const mainRouter=require('./routes/mainRoutes');
const methodOverride=require('method-override');
const cookieParser= require ('cookie-parser');
const multer=require('multer')

const  userRouter= require('./routes/user.routes'); 

const app=express();


app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static("public"));
app.use(cookieParser());

app.set('view engine','ejs');
app.set('views','./views');

app.use('/users', userRouter);

app.use(mainRouter);
app.use(userRouter);




let PORT = 3001;





app.listen(PORT,()=>console.log("sevidor funcionando en el servidor"+PORT))






