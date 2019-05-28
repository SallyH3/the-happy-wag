import React, { Component }from 'react';
import './_App.scss';
import { apikey } from '../../utils/apikey';
import Header from '../../components/Header/index.js';
import { connect } from 'react-redux';

export default class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <section className='App'>
        <Header />
      </section>
    )
  }
}
