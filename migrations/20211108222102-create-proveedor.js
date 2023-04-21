'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('proveedores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      direccion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      estado: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      id_tipo_proveedor: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'tipo_proveedores',
          key: 'id'
        }
      }
    });
    
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('proveedores');
  }
};