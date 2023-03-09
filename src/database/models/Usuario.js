const Sequelize = require('sequelize');




module.exports = (sequelize, dataTypes) => {
    let alias = "Usuarios";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING
        } ,
        email:{
            type: dataTypes.STRING
        } ,
        password:{
            type: dataTypes.STRING
        } ,
    };
    let config = {
        tableName: "Usuarios",
        timestamps: false
    }


    const Usuario = sequelize.define(alias,cols,config);


    return Usuario;
}