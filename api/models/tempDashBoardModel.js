'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TempSchema = new Schema({
    device: {
        type: Number,
        required: 'Identificacao do Dispositivo'
    },
    setor: {
        type: String,
        required: 'Sigla do Setor do Sensor'
    },
    posicao: {
        type: String,
        required: 'Posição de Referência dentro do Setor'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    valor_celcius: {
        type: Number,
        required: 'Temperatura coletada em celcius'
    }
});

module.exports = mongoose.model('Temperatura', TempSchema);
