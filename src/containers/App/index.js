import React, { Component }from 'react';
import './_App.scss';
import { apiKey } from '../../utils/apikey.js';
import Header from '../../components/Header/index.js';
import CardWrapper from '../CardWrapper/index.js';
import CardDetails from '../../components/CardDetails/index.js';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { storeAnimals } from '../../actions';
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
    let result;
    if(this.state.isLoading === true) {
      result = <p className='main-loader'>Loading - please wait...</p>
    } 
    return (
      <section className='App'>
        <Route exact path='/' component= { Header } />
          {result}
        <CardWrapper animals={this.state.animals}/>
        <Route to='/CardDetails' component={ CardDetails } />
        <Route path='/CardDetails/:id' render={({ match }) => {
          const { id } = match.params;
          const selectedCard = this.state.animals.find(animal => {
            return animal.animal_id === parseInt(id)
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

export const mapStateToProps = (state) => ({
  animals: state.animals
})

export const mapDispatchToProps = (dispatch) => ({
  addAnimals: animals => dispatch(storeAnimals(animals))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
