import React, { Component }from 'react';
import './_App.scss';
import { apiKey } from '../../utils/apikey.js';
import Header from '../../components/Header/index.js';
import CardWrapper from '../CardWrapper/index.js';
import Card from '../../components/Card/index.js';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import './_App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: '',
      animals: [],
      isLoading: true
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
    .then(results => this.setState({ animals: results.animals, isLoading: false }))
  }

  componentDidMount = () => {
    this.setState({ isLoading: true })
    this.fetchToken()
  }

  render() {
    console.log('redux', this.props)
    let result;
    if(this.state.isLoading === true) {
      result = <p className='main-loader'>Loading - please wait...</p>
    } 
    return (
      <section className='App'>
        <Route exact path='/' component= { Header } />
          {result}
        <CardWrapper animals={this.state.animals}/>
        <Route path='/card/:id' render={({ match }) => {
          const selectedCard = this.props.animals.find(animal => {
            return animal.animal_id === parseInt(match.params.id)
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

export const mapStateToProps = (state) => ({
  animals: state.animals
})


export const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App)
