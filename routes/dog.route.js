const express = require("express");
const router = express.Router();
const { getDogs, getDog, createDog, updateDog, deleteDog } = require("../controllers/dog.controller");



router.get('/', getDogs);
router.get('/:id', getDog);

router.post('/', createDog);

// update a dog
router.put('/:id', updateDog);

// delete a dog 
router.delete('/:id', deleteDog);


module.exports = router;