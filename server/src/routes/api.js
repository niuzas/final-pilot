const express = require('express');
const router = express.Router();

const {
  getAnimals,
  // getAnimal,
  // createAnimal,
  // deleteAnimal,
  // updateAnimal,
} = require('../controllers/animals');

// Defined Api Routes
router.get('/', getAnimals);
// router.get('/:id', getAnimal);
// router.post('/', createAnimal);
// router.patch('/:id', updateAnimal);
// router.delete('/:id', deleteAnimal);

module.exports = router;


