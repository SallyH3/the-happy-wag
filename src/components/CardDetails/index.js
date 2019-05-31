import React from 'react';
import App from '../../containers/App';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { cleanContactInfo } from '../../utils/cleaners.js';

export const CardDetails = (props) => {
  // console.log('photo', photos[0])
  const { name, description, contact, photos } = props;
  const { city, state, email } = cleanContactInfo(contact);
  return(
    <section className='details-container'>
      <h1 className='details-name'>{ name }</h1>
      <img src={ `${ photos[0].medium }` } />
      <p className='species-descr'>{ description }</p>
      <p className='contact-info'>
        { `${ city }, ${ state }, ${ email }` }
      </p>
      <Link to = '/' className='go-back'>◀ go back</Link>
    </section>
  )
      }

export const mapStateToProps = (state) => ({
  animals: state.animals
})

export default connect(mapStateToProps)(CardDetails)