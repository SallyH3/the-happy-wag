import React from 'react';
import PropTypes from 'prop-types';

export const Header = () => {
  return(
    <section className='header-wrapper'>
      <article className='header'>
        <h1 className='main-title'>The Happy Wag</h1>
      </article>
      <article className='subtitle'>
        <p className='sub-text'>Browse through the furry companion cards and click on an animal for contact information to schedule a meet 'n' greet!</p>
      </article>
    </section>
  )
}

export default Header;

Header.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
}