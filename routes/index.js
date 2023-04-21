const { Router } = require('express');
const productoController = require('../controllers/bodega/productoController');
const router = Router();

// facturas
const facturasController = require('../controllers/cuenta/facturaControler');
const proveedorController = require('../controllers/secretaria/proveedorController');

//RUTAS

module.exports = (app) => {
    //facturas
    router.get('/factura/find', facturasController.find);
    router.get('/proveedor/find', proveedorController.find);
    router.get('/productos/find', productoController.find);

    app.use('/', router);

};