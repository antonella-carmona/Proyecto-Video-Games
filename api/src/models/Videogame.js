const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id:{
      type: DataTypes.UUID, //
      defaultValue: DataTypes.UUIDV4,  //
      allowNull: false, //no quiero que este campo este vacio
      primaryKey:true,
    
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    platforms:{
      type: DataTypes.STRING,
      allowNull: false
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false
    },
    released:{
      type: DataTypes.STRING,
      allowNull: false
    },
    rating:{
      type: DataTypes.STRING,
      allowNull: false
    },
    created:{
    type: DataTypes.BOOLEAN,
    defaultValue: true
    }
  },
 {timestamps: false}
  );
  };

