import React from 'react';
import App from '../../containers/App';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { cleanContactInfo } from '../../utils/cleaners.js';
import PropTypes from 'prop-types';

export const CardDetails = (props) => {
  const { name, description, contact, photos, status, organization_id } = props;
  const { city, state, email } = cleanContactInfo(contact);
  return(
    <section className='modal'>
      <article className='main-details'>
        <img className='details-photo' src={ `${ photos[0].medium }` } />
        <h1 className='details-name'>{ name }</h1>
        <p className='status'>Status: { status }</p>
        <p className='org_id'>Organization id: { organization_id }</p>
        <p className='species-descr'>{ description }</p>
          <p className='location'>
            Location: { `${ city }, ${ state } `}
          </p>
          <p className='email'>Email: {`${ email }`}</p>
        </article>
        <Link to = '/' className='go-back'>◀ Go Back</Link>
    </section>
  )
      }

export default CardDetails

CardDetails.propTypes = {
  photos: PropTypes.array,
  name: PropTypes.string,
  status: PropTypes.string,
  organization_id: PropTypes.string,
  description: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  email: PropTypes.string
}