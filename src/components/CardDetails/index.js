import React from 'react';
import App from '../../containers/App';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { cleanContactInfo } from '../../utils/cleaners.js';

export const CardDetails = (props) => {
  const { name, description, contact, photos } = props;
  const { city, state, email } = cleanContactInfo(contact);
  return(
    <section className='details-container'>
      <article className='main-details'>
        <img className='details-photo' src={ `${ photos[0].medium }` } />
        <h1 className='details-name'>{ name }</h1>
        <p className='species-descr'>Description: { description }</p>
        <p className='contact-info'>
          City, state: { `${ city }, ${ state } `}
          Email: {`${ email }`}
        </p>
        <Link to = '/' className='go-back'>◀ go back</Link>
      </article>
    </section>
  )
      }

export const mapStateToProps = (state) => ({
  animals: state.animals
})

export default connect(mapStateToProps)(CardDetails)