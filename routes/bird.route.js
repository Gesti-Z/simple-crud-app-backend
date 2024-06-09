const express = require("express");
const router = express.Router();
//const Bird = require("../models/Bird.model");
const { getBirds, getBird, createBird, updateBird, deleteBird } = require("../controllers/bird.controller");



router.get('/', getBirds);
router.get('/:id', getBird);

router.post('/', createBird);

// update a Bird
router.put('/:id', updateBird);

// delete a Bird 
router.delete('/:id', deleteBird);


module.exports = router;