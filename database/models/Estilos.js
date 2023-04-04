module.exports = ( sequelize, dataTypes) =>{
    let alias = "estilo";
    let cols={

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false

        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        }

    }
    let config = {
        tableName: "estilo",
        timestamps:false
    }

    const estilo= sequelize.define(alias,cols,config);
    
    ////////////////////////hasMany////////////////////////////////

    estilo.associate = function (models){

        estilo.hasMany(models.producto, {

            as: "producto",
            foreignKey:"id_estilo" 

        });

    }

    return estilo;
}