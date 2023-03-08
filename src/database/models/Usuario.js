const Sequelize = require('sequelize');
const sequelize = require('../database'); 

const Usuario = sequelize.define('usuarios',{
    id: Sequelize.STRING,
    nombre: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
},
    {
    timestamps: false
    });
  



module.exports = Usuario;