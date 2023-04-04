module.exports = ( sequelize, dataTypes) =>{
    let alias = "clase";
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
        tableName: "clase",
        timestamps:false
    }

    const clase= sequelize.define(alias,cols,config);

    ////////////////////////hasMany////////////////////////////////


    clase.associate = function (models){

        clase.hasMany(models.cliente, {

            as: "cliente",
            foreignKey:"id_clase"
        });

    }


    return clase;
}