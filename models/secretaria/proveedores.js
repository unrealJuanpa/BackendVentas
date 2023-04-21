'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class proveedores extends Model {
    static associate(models) {
      proveedores.belongsTo(models.tipo_proveedores, {
        foreignKey: "id_tipo_proveedor" //referencia a tabla padre
      })
    }
  };
  proveedores.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_tipo_proveedor: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'proveedores',
  });
  return proveedores;
};