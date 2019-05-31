import React, { Component }from 'react';
import './_App.scss';
import { apiKey } from '../../utils/apikey.js';
import Header from '../../components/Header/index.js';
import CardWrapper from '../CardWrapper/index.js';
import CardDetails from '../../components/CardDetails/index.js';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { setAnimals } from '../../actions';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      token: '',
      isLoading: false
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
    .then(results => this.props.setAnimals(results.animals)) 
    .then(() => this.setState({ isLoading: false }))
  }

  componentDidMount = () => {
    this.setState({ isLoading: true }, () => {
      this.fetchToken()
    })
  }

  render() {
    if(this.state.isLoading) {
      return <p className='main-loader'>Loading - please wait...</p>
    } else {
    return (
      <section className='App'>
        <Route exact path='/' component= { Header } />
        <CardWrapper animals={this.props.animals}/>
        <Route exact path='/CardDetails/:id' render={({ match }) => {
          const { id } = match.params;
          const selectedCard = this.props.animals.find(animal => {
            return animal.id === parseInt(id)
          })
          if(selectedCard) {
            return <CardDetails {...selectedCard} />
          }
        }}
        />  
      </section>
    )
    }
  }
}

export const mapStateToProps = (state) => ({
  animals: state.animals
})

export const mapDispatchToProps = (dispatch) => ({
  setAnimals: (animals) => dispatch(setAnimals(animals))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
