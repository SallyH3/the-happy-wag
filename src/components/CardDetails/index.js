import React from 'react';
import App from '../../containers/App';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { cleanContactInfo } from '../../utils/cleaners.js';

const CardDetails = (props) => {
  const { name, description, contact } = props;
  const { city, state, email } = cleanContactInfo(contact);
  return(
    <section className='details-container'>
      {/* <i className="far fa-heart"></i> */}
      <h1 className='details-name'>{ name }</h1>
      <p className='species-descr'>{ description }</p>
      <p className='contact-info'>{ `${city}, ${state}, ${email}` }</p>
      <Link to = '/' className='go-back'>◀ go back</Link>
    </section>
  )
      }

export const mapStateToProps = (state) => ({
  animals: state.animals
})

export default connect(mapStateToProps)(CardDetails)