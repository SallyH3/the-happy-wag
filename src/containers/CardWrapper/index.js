import React, { Component } from 'react';
import Card from '../../components/Card';

export class CardWrapper extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }

  render() {
    console.log('animals', this.props.animals)
    const details = this.props.animals.map(animal => {
      return <Card 
        photo={animal.photos || ''}
        name={animal.name}
        age={animal.age}
        gender={animal.gender}
        species={animal.species}
        contact={animal.contact}
        key={animal.id}
        id={animal.id}
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