import React, { Component }from "react";
import "./_App.scss";
import { apiKey } from "../../utils/apikey.js";
import Header from "../../components/Header/index.js";
import CardWrapper from "../CardWrapper/index.js";
import CardDetails from "../../components/CardDetails/index.js";
import Loader from '../../components/Loader';
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { getAnimals } from "../../utils/apiCalls";
import { setAnimals } from "../../actions";
import { handleLoading } from "../../actions";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      token: "",
      errorStatus: ""
    }
  }

  fetchToken = () => {
    fetch("http://localhost:3001")
    .then(response => response.json())
    .then(credentials => this.setState({token: credentials.token
    }, this.fetchAnimals))
  }

  fetchAnimals = async () => {
    const url = "https://api.petfinder.com/v2/animals"
    const options = {
      headers: {
        Authorization: "Bearer " + this.state.token
      }
    }
    // fetch(url, options)
    // .then(response => response.json())
    // .then(results => this.props.setAnimals(results.animals)) 
    // .then(() => this.setState({ isLoading: false }))
    // .catch(error => this.setState({ 
    //   errorStatus: "Error fetching data" 
    // }))

    //add try catch too
    try { 
      const result = await getAnimals(url, options)
      this.props.setAnimals(result.animals)
      this.props.isLoading(false)
      // console.log('result', result.animals)
    } catch(error) {
        this.setState({errorStatus: error.message})
    }
  }

  // fetchSomeAnimals = async (url, options) => {
  //   const response = await fetch(url, options) 
  //   const result = response.json()
  //   if(!response.ok) {
  //     throw Error('Error fetching data')
  //   }
  //   return result
  // }

  componentDidMount = () => {
    // this.setState({ isLoading: true }, () => {
      this.fetchToken()
    // })
  }

  render() {
    if(this.props.boolean) return <Loader />
    return (
      <section className="App">
        <Route exact path="/" component= { Header } />
        <CardWrapper animals={this.props.animals}/>
        <Route exact path="/CardDetails/:id" render={({ match }) => {
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

export const mapStateToProps = (state) => ({
  animals: state.animals,
  boolean: state.boolean
})

export const mapDispatchToProps = (dispatch) => ({
  setAnimals: (animals) => dispatch(setAnimals(animals)),
  isLoading: (boolean) => dispatch(handleLoading(boolean))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

App.propTypes = {
  animals: PropTypes.array,
  setAnimals: PropTypes.func
}