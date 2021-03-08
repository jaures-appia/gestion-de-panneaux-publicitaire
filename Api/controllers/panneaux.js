const Panneaux = require('../models/panneaux')

exports.createPanneaux = async (req, res) => {
    const panneaux = await Panneaux.create(req.body)
    // console.log(req.body)
    res.status(201).json(panneaux)
}

exports.getAllPanneaux = (req, res) => {
    res.send("get all panneaux")
}

exports.getOnePanneaux = (req, res) => {
    res.send("get one panneaux")
}

exports.updatePanneaux = (req, res) => {
    res.send("update panneaux")
}

exports.deletePanneaux = (req, res) => {
    res.send("delete panneaux")
}