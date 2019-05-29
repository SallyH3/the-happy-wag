import React, { Component }from 'react';
import './_App.scss';
import { apiKey } from '../../utils/apikey.js';
import Header from '../../components/Header/index.js';
import CardWrapper from '../CardWrapper/index.js';
import Card from '../../components/Card/index.js';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      token: '',
      animals: []
    }
  }

  fetchToken = () => {
    fetch('http://localhost:3001')
    .then(response => response.json())
    .then(credentials => this.setState({ token: credentials.token }, this.fetchAnimals))
  }

  fetchAnimals = () => {
    const options = {
      headers: {
        Authorization: 'Bearer ' + this.state.token
      }
    }
    fetch('https://api.petfinder.com/v2/animals', options)
    .then(response => response.json())
    .then(results => this.setState({ animals: results.animals }))
  }

  componentDidMount = () => {
    this.fetchToken()
  }

  render() {
    return (
      <section className='App'>
        <Route exact path='/' component= { Header } />
        <CardWrapper animals={this.state.animals}/>
        <Route path='/dogs/:id' render={({ match }) => {
          const selectedCard = this.props.dogs.find(dog => {
            return dog.dog_id === parseInt(match.params.id)
          })
          if(selectedCard) {
            return <Card {...selectedCard} />
          }
        }}
        />  
      </section>
    )
  }
}
