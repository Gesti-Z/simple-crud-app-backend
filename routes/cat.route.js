const express = require("express");
const router = express.Router();
//const Cat = require("../models/Cat.model");
const { getCats, getCat, createCat, updateCat, deleteCat } = require("../controllers/cat.controller");



router.get('/', getCats);
router.get('/:id', getCat);

router.post('/', createCat);

// update a Cat
router.put('/:id', updateCat);

// delete a Cat 
router.delete('/:id', deleteCat);


module.exports = router;