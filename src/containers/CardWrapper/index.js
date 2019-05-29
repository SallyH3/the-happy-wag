import React, { Component } from 'react';
import Card from '../../components/Card';

export default class CardWrapper extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }

  render() {
    console.log('animals', this.props.animals)
    const names = this.props.animals.map(animal => {
      return <Card 
        name={animal.name}
        age={animal.age}
        gender={animal.gender}
        species={animal.species}
        key={animal.id}
        />
    })
    return(
      <section className='card-container'>
        {names}
      </section>
    )
  }
}