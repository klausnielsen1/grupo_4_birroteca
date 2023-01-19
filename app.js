const express=require('express');
const app=express();
const path=require('path');
const mainRouter=require('./routes/mainRoutes');
const methodOverride=require('method-override');


app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static("public"));
app.set('view engine','ejs');
app.set('views','./views');


app.use(mainRouter);




let PORT = 3001;




app.listen(PORT,()=>console.log("sevidor funcionando en el servidor"+PORT))






