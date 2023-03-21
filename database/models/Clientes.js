//2 parámetros, el primero es la conexión de la BD y el segundo son los tipos de BD para trabajar 
module.exports = ( sequelize, dataTypes) =>{
    let alias = "cliente";
    let cols={
       
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        
        id_clase: {
            type: dataTypes.INTEGER,
            foreignKey: true,
            autoIncrement: true,
            allowNull: false
        },

        nombre: {
            type: dataTypes.STRING,
            allowNull: false, 
        },

        apellido:{
            type: dataTypes.STRING,
            allowNull: false
        },

        email: {
            type: dataTypes.STRING,
            allowNull: false
        },

        contraseña: {
            type: dataTypes.STRING,
            allowNull: false
        },

        fechaNac:{
            type: dataTypes.DATE,

        },

        avatar: {
            type: dataTypes.INTEGER,
            allowNull: true
        }

    }
    let config = {
        tableName: "cliente",
        timestamps:false
    }

    const cliente= sequelize.define(alias,cols,config);


    return cliente;
}
