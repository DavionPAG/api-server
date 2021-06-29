'use strict';

const express = require('express');

const Crud = require('../models/shop');
const crud = new Crud();

const router = express.Router();

router.post('/shop', createRec);
router.get('/shop', readAllRec);
router.get('/shop/:id', readOneRec);
router.put('/shop/:id', updateRec);
router.delete('/shop/:id', deleteRec);

async function createRec(req, res) {
  let obj = req.body;
  let newRec = await crud.create(obj);
  res.status(201).json(newRec);
}

async function readAllRec(req, res) {
  let allRec = await crud.get();
  res.status(200).json(allRec);
}

async function readOneRec(req, res) {

  let oneRec = await crud.get(req.params.id);
  res.status(200).json(oneRec);
}

async function updateRec(req, res) {
  let obj = req.body;
  let upRec = await crud.update((req.params.id), obj);
  res.status(201).json(upRec);
}

async function deleteRec(req, res) {
  
  let delRec = await crud.delete(req.params.id);
  res.status(200).json(delRec)
}

module.exports = router;