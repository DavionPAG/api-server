'use strict';

const express = require('express');

const Crud = require('../models/clothes');
const crud = new Crud();

const router = express.Router();

router.post('/clothes', createRec);
router.get('/clothes', readAllRec);
router.get('/clothes/:id', readOneRec);
router.put('/clothes/:id', updateRec);
router.delete('/clothes/:id', deleteRec);

function createRec(req, res) {
    let obj = req.body;
    let newClothes = crud.create(obj);
    res.status(201).json(newClothes);
}

function readAllRec(req, res) {
    let allRec = crud.get();
    res.status(200).json(allRec);
}

function readOneRec(req,res) {
    let oneRec = crud.get(parseInt(req.params.id));
    res.status(200).json(oneRec);
}

function updateRec(req, res) {
    let obj = req.body;
    let id = parseInt(req.params.id);
    let upRec = crud.update(id, obj);
    res.status(201).json(upRec);
}

function deleteRec(req, res) {
    let strikeRec = crud.delete(parseInt(req.params.id));
}

module.exports = router;