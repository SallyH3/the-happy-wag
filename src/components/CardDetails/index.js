import React from 'react';
import App from '../../containers/App';
import { Link } from 'react-router-dom';

const CardDetails = ({ id, name, description, contact }) => {
  return(
    <section>
      {/* <i className="far fa-heart"></i> */}
      <h1 className='details-name'>{ name }</h1>
      <p className='species-descr'>{ description }</p>
      <Link to={ App } className='go-back'>◀ back</Link>
    </section>
  )
}

export default CardDetails;