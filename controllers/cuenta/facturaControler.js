'use strict'
const Sequelize     = require('sequelize');
const db = require("../../models");
const Factura = db.facturas;
const TipoFactura = db.tipo_facturas;
const moment = require('moment');
const axios = require('axios')

module.exports = {
    find (req, res) {
        return Factura.findAll({
            include: [ //Incluyendo otras entidades en la consulta
                {
                    model: TipoFactura,
                    require: true
                }
            ]
        })
        .then(cuenta => res.status(200).send(cuenta))
        .catch(error => res.status(400).send(error))
    },
};

