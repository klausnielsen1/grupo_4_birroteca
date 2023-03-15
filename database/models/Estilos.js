module.exports = ( sequelize, dataTypes) =>{
    let alias = "cliente";
    let cols={
       
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
            notNull: true, 

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
        tableName: "cliente",
        timestamps:false
    }

    const cliente= sequelize.define(alias,cols,config);


    return cliente;
}