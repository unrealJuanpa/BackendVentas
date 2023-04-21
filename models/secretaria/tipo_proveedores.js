'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipo_proveedores extends Model {
    static associate(models) {
      tipo_proveedores.hasMany(models.proveedores, {
        foreignKey: "id_tipo_proveedor" //Hacer referencia a tabla hijo
      })
    }
  };
  tipo_proveedores.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'tipo_proveedores',
  });
  return tipo_proveedores;
};