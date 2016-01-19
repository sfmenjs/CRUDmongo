"use strict";
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Dino = mongoose.model('Dino');

// GET /api/v1/dino
router.get('/', (req, res) => {
  Dino.find({}).exec((err, result) => {
    if(err) return res.status(500).send(err);
    res.send(result);
  });
});

// GET /api/v1/dino/:id
router.get('/:id', (req, res) => {
  //mongoose method
  Dino.findOne({ _id : req.params.id}).exec((err, result) => {
    if(err) return res.status(500).send(err);
    if(!result) return res.status(400).send("Could not find the dino you want.");
    res.send(result);
  });
});

// POST /api/v1/dino
router.post('/', (req, res) => {
  let new_dino = new Dino(req.body);
  new_dino.save((err, result) => {
    if(err) return res.status(500).send("Error in the database.");
    if(!result) return res.status(400).send("Could not save the dino. Check yo fields.");
    res.send(result);
  });
});

// PUT /api/v1/dino/:id
router.put('/:id', (req, res) => {
 Dino.update({ _id: req.params.id }, req.body, (err, result) => {
   if(err) res.status(500).send(err);
   res.send(result);
 });
});

// DELETE /api/v1/dino/:id
router.delete('/:id', (req, res) => {
  Dino.remove({ _id: req.params.id }, (err, result) => {
    if(err) return res.status(500).send(err);
    console.log(result);
    if(result.result.n !== 1) return res.status(500).send("Oops, deleted too many dinos, or not enough. I don't know which.");
    res.send('Success');
  });
});

module.exports = router;
