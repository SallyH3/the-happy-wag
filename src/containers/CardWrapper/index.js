import React, { Component } from 'react';
import Card from '../../components/Card';
import PropTypes from 'prop-types';

export class CardWrapper extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }

  render() {
    const details = this.props.animals.map(animal => {
      return <Card 
      {...animal}
        photo={animal.photos || ''}
        key={animal.id}
        />
    })
    return(
      <section className='card-container'>
        {details}
      </section>
    )
  }
}

export default CardWrapper;

CardWrapper.propTypes = {
  animals: PropTypes.array
}