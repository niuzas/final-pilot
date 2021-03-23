const Animal = require('../models/Animal');

// Get Animals
const getAnimals = async (req, res) => {
  try {
    let animals = await Animal
      .find()
    console.log("Animals:", animals)
    animals = animals.map(animal => ({
      id: animal._id,
      title: animal.title,
    }));
    res.status(200).json(animals);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
};

module.exports = {
  getAnimals,
}
