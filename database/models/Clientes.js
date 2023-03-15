//2 parámetros, el primero es la conexión de la BD y el segundo son los tipos de BD para trabajar 
module.exports = ( sequelize, dataTypes) =>{
    let alias = "clientes";
    let cols={
       
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,

        },
        apellido:{
            type: dataTypes.STRING,

        },
        email: {
            type: dataTypes.STRING,

        },
        contraseña: {
            type: dataTypes.STRING,

        },
        fechaNac:{
            type: dataTypes.DATE,

        },
        avatar: {
            type: dataTypes.INTEGER,

        },
        id_clase: {
            type: dataTypes.INTEGER,
        }
    }
    let config = {
        tableName: "clientes",
        timestamps:false
    }

    const clientes= sequelize.define(alias,cols,config);


    return clientes;
}
