'use strict'
const Sequelize     = require('sequelize');
const db = require("../../models");
const Proveedores = db.proveedores;
const TipoProveedores = db.tipo_proveedores;
const moment = require('moment');
const axios = require('axios')

module.exports = {
    find (req, res) {
        return Proveedores.findAll({
            include: [ //Incluyendo otras entidades en la consulta
                {
                    model: TipoProveedores,
                    require: true
                }
            ]
        })
        .then(cuenta => res.status(200).send(cuenta))
        .catch(error => res.status(400).send(error))
    },
};

