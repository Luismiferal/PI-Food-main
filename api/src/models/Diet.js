const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('diet', {

        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allownull: false,
            autoIncrement:  true,
            unique: true
        },
        name:{
            type: DataTypes.STRING,
            allownull:false,
            
        }
    },
    {
        timestamps: false,
        createAt: false,
        updateAt: false
    })
    }