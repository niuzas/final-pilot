import React, { Component } from 'react';

import api from '../../api';
import FormCreateAnimal from '../FormCreateAnimal';
import Table from '../Table';
import styles from './styles.module.css';

export class AnimalManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedAnimalId: null,
      animals: [],
      editedAnimal: {},
    };
  }

  createAnimal = () => {
    api.postAnimal(
      this.state.editedAnimal,
      () =>
        api.getAnimals(
          (animals) =>
            this.setState({
              animals,
              editedAnimal: {},
            }),
          (error) => console.error(error)
        ),
      (error) => console.error(error)
    );
  };

  saveAnimal = () => {
    api.updateAnimal(
      this.state.editedProductId,
      this.state.editedProduct,
      () =>
        api.getProducts(
          (products) =>
            this.setState({
              products,
              editedAnimal: {},
              editedAnimalId: null,
            }),
          (error) => console.error(error)
        ),
      (error) => console.error(error)
    );
  };

  deleteAnimal = (id) => {
    api.deleteAnimal(
      id,
      () =>
        api.getAnimals(
          (animals) => this.setState({ animals }),
          (error) => console.error(error)
        ),
      (error) => console.error(error)
    );
  };

  editAnimal = (id) => {
    let newState = {
      editedAnimalId: this.state.editedAnimalId,
      editedAnimal: this.state.editedAnimal,
    };
    if (id === this.state.editedAnimalId) {
      newState.editedAnimalId = null;
      newState.editedAnimal = {};
    } else {
      newState.editedAnimalId = id;
      const editedAnimal = { ...this.state.animals.find((animal) => animal.id === id) };
      delete editedAnimal.id;
      newState.editedAnimal = editedAnimal;
    }
    this.setState(newState);
  };

  updateEditedAnimal = (editedInput) => {
    this.setState({
      editedAnimal: {
        ...this.state.editedAnimal,
        ...editedInput,
      },
    });
  };

  componentDidMount() {
    api.getAnimals(
      (data) => {
        console.log('AM CDM data:', data);
        return this.setState({ animals: data });
      },
      (error) => console.error(error)
    );
    console.log('AM mounted');
  }

  render() {
    const { animals, editedAnimalId, editedAnimal } = this.state;
    const isUpdating = Boolean(editedAnimalId);
    console.log('AM rendered, data:', animals);

    return (
      <div className={styles.AnimalManagerGrid}>
        <FormCreateAnimal
          handleSubmit={isUpdating ? this.saveAnimal : this.createAnimal}
          isUpdating={isUpdating}
          handleInputChange={this.updateEditedAnimal}
          inputData={editedAnimal}
        />
        <Table title="Animals" data={animals} deleteEntity={this.deleteAnimal} updateEntity={this.editAnimal} />
      </div>
    );
  }
}

export default AnimalManager;
