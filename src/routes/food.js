'use strict';

const express = require('express');

const Crud = require('../models/food');
const crud = new Crud();

const router = express.Router();

router.post('/food', createRec);
router.get('food', readAllRec);
router.get('/foood/:id', readOneRec);
router.put('/food/:id', updateRec);
router.delete('/food/:id', deleteRec);

function createRec(req, res) {
    let obj = req.body;
    let newfood = crud.create(obj);
    res.status(201).json(newfood);
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