//2 parámetros, el primero es la conexión de la BD y el segundo son los tipos de BD para trabajar 
module.exports = ( sequelize, dataTypes) =>{

    const clientes = sequelize.define('clientes',
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nombre: {
                type: dataTypes.INTEGER,

            },
            apellido:{
                type: dataTypes.INTEGER,

            },
            email: {
                type: dataTypes.INTEGER,

            },
            contraseña: {
                type: dataTypes.INTEGER,

            },
            fechaNac:{
                type: dataTypes.INTEGER,

            },
            avatar: {
                type: dataTypes.INTEGER,

            },
            id_clase{
                type: dataTypes.INTEGER,

            }



    )
//DEFINE recibe 3 parámetros. 1: nombre de la tabla (nombre del archivo en plural). Es
//un objeto literal que representa los detalles de la tabla


    return clientes;
}
