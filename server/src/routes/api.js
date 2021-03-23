const express = require('express');
const router = express.Router();

const {
  getAnimals,
  createAnimal,
  deleteAnimal,
  updateAnimal,
} = require('../controllers/animals');

// Defined Api Routes
router.get('/', getAnimals);
router.post('/', createAnimal);
router.patch('/:id', updateAnimal);
router.delete('/:id', deleteAnimal);

module.exports = router;


