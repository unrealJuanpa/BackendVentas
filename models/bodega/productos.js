'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productos extends Model {
    static associate(models) {
      
    }
  };
  productos.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      unidades: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
  }, {
    sequelize,
    modelName: 'productos',
  });
  return productos;
};