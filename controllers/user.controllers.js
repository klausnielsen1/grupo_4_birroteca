const express= require('express');
const fs= require('fs');
const path= require('path');
const bcrypt= require('bcryptjs');
const multer=require('multer');
const {validationResult}= require('express-validator');
const db = require('../database/models');



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
        const {name,birthdate,password,lastname,email} = req.body
        const avatar = req.file.filename

        db.Client.create({
            name,
            birthdate,
            password :  bcrypt.hashSync(password, 12),
            lastname,
            email,
            avatar,
            idClass : 2
        })
        .then(()=>{
            return res.redirect('/')
        })
        .catch(errors => console.log(errors))

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


    delete: (req,res)=>{
        db.Client.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(() =>{
            return res.redirect('/');
        })
    }
}
