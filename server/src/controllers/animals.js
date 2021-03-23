const Animal = require('../models/Animal');

const acceptableProperties = ['name', 'breed', 'weight', 'birthDate'];

// Get Animals
const getAnimals = async (req, res) => {
  try {
    let animals = await Animal.find();
    console.log('Animals:', animals);
    animals = animals.map((animal) => ({
      id: animal._id,
      name: animal.name,
      breed: animal.breed,
      weight: animal.weight,
      birthDate: animal.birthDate,
    }));
    res.status(200).json(animals);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createAnimal = async (req, res) => {
  try {
    const { name, breed, weight, birthDate } = req.body;
    const animal = new Animal({ name, breed, weight, birthDate });
    await animal.save();
    res.status(201).json({
      id: animal._id,
      name: animal.name,
      weight: animal.weight,
      birthDate: animal.birthDate,
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: 'Error: animal not created. Invalid Data' });
  }
};

const deleteAnimal = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedAnimal = await Animal.findByIdAndDelete(id);
    if (!deletedAnimal) throw new Error();
    res.status(200).json({ message: 'Successfully deleted' });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: `Error: animal with id ${id} not found` });
  }
};

const updateAnimal = async (req, res) => {
  const { id } = req.params;
  const newAnimalProperties = req.body;
  try {
    for (const newProp in newAnimalProperties) {
      if (!acceptableProperties.includes(newProp)) throw new Error('Invalid properties');
    }
    const result = await Animal.findByIdAndUpdate(id, newAnimalProperties, { new: true });
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: `Error: animal width id ${id} was not updated`,
      purpose: error.message,
    });
  }
};

module.exports = {
  getAnimals,
  createAnimal,
  deleteAnimal,
  updateAnimal,
};
