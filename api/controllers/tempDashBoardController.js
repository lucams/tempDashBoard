'use strict';


var mongoose = require('mongoose'),
    Temp = mongoose.model('Temperatura');

exports.list_all_temp = function (req, res) {
    Temp.find({}, function (err, temp) {
        if (err)
            res.send(err);
        res.json(temp);
    });
};

exports.create_a_temp = function (req, res) {
    var new_temp = new Temp(req.body);
    new_temp.save(function (err, temp) {
        if (err)
            res.send(err);
        res.json(temp);
    });
};


exports.read_a_temp = function (req, res) {
    Temp.findById(req.params.tempId, function (err, temp) {
        if (err)
            res.send(err);
        res.json(temp);
    });
};


exports.update_a_temp = function (req, res) {
    Temp.findOneAndUpdate({ _id: req.params.tempId }, req.body, { new: true }, function (err, temp) {
        if (err)
            res.send(err);
        res.json(temp);
    });
};


exports.delete_a_temp = function (req, res) {
    Temp.remove({
        _id: req.params.tempId
    }, function (err, temp) {
        if (err)
            res.send(err);
        res.json({ message: 'Temperatura successfully deleted' });
    });
};