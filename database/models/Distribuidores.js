module.exports = ( sequelize, dataTypes) =>{
    let alias = "distribuidor";
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
        }

    }
    let config = {
        tableName: "distribuidor",
        timestamps:false
    }

    const distribuidor= sequelize.define(alias,cols,config);

    ////////////////////////hasMany////////////////////////////////

    distribuidor.associate = function (models){

        distribuidor.hasMany(models.producto, {

            as: "producto",
            foreignKey:"id_distribuidor" 

        });

    }

    return distribuidor;
}