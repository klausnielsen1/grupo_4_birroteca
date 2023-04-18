const express= require('express');
const fs= require('fs');
const path= require('path');
const bcrypt= require('bcryptjs');
const multer=require('multer');
const {validationResult}= require('express-validator');
const db = require('../database/models');
const users = db.clientes



module.exports= {
    // listaUsuarios: function (req,res){
    //     db.clientes.findAll()
    //         .then(function(usuario){
    //             res.render('listadoUsuarios',{usuarios:usuario}) //no es mas usuario
    //         })
    
    getRegister: (req,res)=>{
        res.render('register')
    },

    postUser: function(req,res){
        console.log(users);
        let usuario={
            nombre: req.body.nombre,
            usuario: req.body.usuario,
            email: req.body.email,
            imagen:req.body.productsImg,
            fecha:req.body.fecha,
            password:bcrypt.hashSync(req.body.password, 10)
        }
        db.clientes.create(usuario)
            .then(usuario => {
                res.redirect('/')
            })
        
        
        
    

        // let errors = validationResult(req);
        // if (errors.isEmpty()){

        //     const users= JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json')));
            
    
        //     const userData= {
        //         nombre: req.body.nombre,
        //         usuario: req.body.usuario,
        //         email: req.body.email,
        //         fecha: req.body.fecha,
        //         password: bcrypt.hashSync(req.body.password, 10) 
                
        //     }
        
        //     users.push(userData);   
        //     fs.writeFileSync(path.join(__dirname, '../data/users.json'), (JSON.stringify(users)));
        
        //     res.redirect('/')
        // } else {
        //     res.render('register',{
        //         errors:errors.array(),
        //         old:req.body
        //     })
        // }




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
                req.session.usuarioLogeado = userDataLogin
                if (userDataLogin.remember){
                    res.cookie('usuario', req.body.usuario, { maxAge: 60 * 60 * 24 * 31 * 1000});
                }
                return res.redirect('/')

            }            
        }else{
            return res.render('/login');
            //mostrar errores en la vista
        }
    },

    //función EDIT

    edit: function (req,res){
        res.render('user-edit')
    },


    //delete user

    delete: function(req,res){
        users.query('DELETE FROM cliente WHERE id = ?',[req.params.id],(err, rows, fields) => {
            if(!err)
            res.send('borrado')
            else
            console.log(err)
        })
    }

}
