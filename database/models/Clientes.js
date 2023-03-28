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
        

        nombre: {
            type: dataTypes.STRING,
            allowNull: false, 
        },
        usuario: {
            type: dataTypes.STRING,
            allowNull: false, 
        },        

        email: {
            type: dataTypes.STRING,
            allowNull: false
        },

        password: {
            type: dataTypes.STRING,
            allowNull: false
        },

        fecha:{
            type: dataTypes.DATE,

        },

    }
    let config = {
        tableName: "cliente",
        timestamps:false
    }

    const cliente= sequelize.define(alias,cols,config);

    ////////////////////////belongsTo////////////////////////////////


    cliente.associate = function (models){

        cliente.belongsTo(models.clase, {

            as: "clase",
            foreignKey:"id_clase"
            
        });

    }

    ////////////////////////hasMany////////////////////////////////

    cliente.associate = function (models){

        cliente.hasMany(models.pedido, {
            
            as: "pedido",
            foreignKey:"id_cliente"

        });

    }


    return cliente;
}
