const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Favorite', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true
    },
  },
  {timestamps: false, freezeTableName:true}
  );
};

//freezeTableName:true //se asegura de que el nombre de la tabla sea "Favorite" sin pluralizar.