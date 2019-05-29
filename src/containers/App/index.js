import React, { Component }from 'react';
import './_App.scss';
import { apiKey } from '../../utils/apikey.js';
import Header from '../../components/Header/index.js';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  // componentDidMount = () => {
  //   const url = `https://api.petfinder.com/v2/animals/api_key=${apiKey}&language=en-US&page=1`
  //   fetch(url)
  //   .then(response => console.log('response', response))
  // }

  render() {
    return (
      <section className='App'>
        <Route exact path='/' component= { Header  } />  
      </section>
    )
  }
}
