import React, { Component }from 'react';
import './_App.scss';
import { apiKey } from '../../utils/apikey.js';
import Header from '../../components/Header/index.js';
import { connect } from 'react-redux';

export default class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount = () => {
    const url = `https://api.petfinder.com/v2/animals/api_key=${apiKey}&language=en-US&page=1`
    //having issues with a CORS error - this mode below doesnt seem to help anything. Tried using mode: 'cors' and still wont work. Added chrome extension to try and bypass issues, but, still wont resolve and response is giving me back none of the data I am looking for.
    fetch(url, {mode: 'no-cors'})
    .then(response => console.log('response', response))
  }

  render() {
    return (
      <section className='App'>
        <Header />
      </section>
    )
  }
}
