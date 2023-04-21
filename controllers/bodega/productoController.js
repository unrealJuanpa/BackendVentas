'use strict'
const Sequelize     = require('sequelize');
const db = require("../../models");
const Producto = db.productos;
const moment = require('moment');
const axios = require('axios')

module.exports = {
    find (req, res) {
        return Producto.findAll({
        })
        .then(cuenta => res.status(200).send(cuenta))
        .catch(error => res.status(400).send(error))
    },
};

