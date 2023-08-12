const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type : DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },    
    summary:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    healthscore:{
      type: DataTypes.INTEGER,
      validate:{
        min: 0,
        max: 100
      },
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    steps:{
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
   {
        timestamps: false,
        createAt: false,
        updateAt: false
    });
};
