import React, { Component } from 'react';
import data from '../../data.js';
import Card from '../../components/Card';

export default class CardWrapper extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }

  render() {
    console.log('animals', data.animals)
    const names = data.animals.map(animal => {
      return <Card 
        name={animal.name}
        age={animal.age}
        gender={animal.gender}
        key={animal.id}
        />
    })
    return(
      <section>
        {names}
      </section>
    )
  }
}