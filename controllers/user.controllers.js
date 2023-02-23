const express= require('express');
const fs= require('fs');
const path= require('path');
const bcrypt= require('bcryptjs');
const multer=require('multer')



module.exports= {
    getRegister: (req,res)=>{
        res.render('register')
    },

    postUser: function(req,res){
        const users= JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json')));
        

        const userData= {
            nombre: req.body.nombre,
            usuario: req.body.usuario,
            email: req.body.email,
            fecha: req.body.fecha,
            password: bcrypt.hashSync(req.body.password, 10) 
            
        }
    
        users.push(userData);   
        fs.writeFileSync(path.join(__dirname, '../data/users.json'), (JSON.stringify(users)));
    
        res.redirect('/')
    },

    getLogin: function(req,res){
        res.render('login')
    },

    postLogin: function(req,res){
        const users= JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json')));

        
        const userDataLogin = {
            
            usuario: req.body.usuario,
            password: req.body.password,
            remember: req.body.remember
        }
        
        const loggedUser= users.find(user => user.usuario === userDataLogin.usuario);

        if (loggedUser){
            let isCorrect= bcrypt.compareSync(userDataLogin.password, loggedUser.password);

            if(isCorrect){
                if (userDataLogin.remember){
                    res.cookie('usuario', req.body.usuario, { maxAge: 60 * 60 * 24 * 31 * 1000});
                    return res.redirect('/')
                }

            }            
        }else{
            return res.redirect('/login');
        }

        

        
        
    },


}
