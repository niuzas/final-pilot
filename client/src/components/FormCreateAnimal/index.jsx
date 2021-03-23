import React from 'react';

import Button from '../Button';
import FormGroup from '../FormGroup';
import styles from './styles.module.css';

class FormCreateAnimal extends React.Component {

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit();
  }

  render() {
    const actionTitle = (this.props.isUpdating ? 'Update' : 'Create') + ' Animal';
    return (
      <form className={styles.FormCreate} onSubmit={this.handleFormSubmit}>
        <h2>{actionTitle}</h2>
        <div className={styles.FormGroupContainer}>
          <FormGroup
            name="name"
            type="text"
            value={this.props.inputData.name ?? ''}
            handleChange={(value) => this.props.handleInputChange({ name: value })}
          />
          <FormGroup
            name="breed"
            type="text"
            value={this.props.inputData.breed ?? ''}
            handleChange={(value) => this.props.handleInputChange({ breed: value })}
          />
          <FormGroup
            name="weight"
            type="number"
            value={this.props.inputData.weight ?? ''}
            handleChange={(value) => this.props.handleInputChange({ weight: value })}
          />
          <Button>{actionTitle}</Button>
        </div>
      </form>
    )
  }
}

export default FormCreateAnimal;