import React from 'react';
import CardDetails from '../CardDetails';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import fallbackImage from '../../pets.png';

export const Card = (props) => {
  const { photo } = props
  let medium = '';
  if (!photo[0]) {
    medium = fallbackImage
  } else {
    medium = photo[0].medium
  }
  return (
    <Link to = {`/CardDetails/${props.id}`} style={{ textDecoration: 'none' }}>
      <section className='card-display'>
        <article className='card-layout'>
        <img src={ medium  } />
        <p className='details name'>{props.name}</p>
        <p className='details'>Age: {props.age}</p>
        <p className='details'>Gender: {props.gender}</p>
        <p className='details'>Species: {props.species}</p>
        <p className='card-back'></p>
        </article>
      </section>
    </Link>
  )
}

export default Card;

Card.propTypes = {
  age: PropTypes.string,
  contact: PropTypes.object,
  gender: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  photos: PropTypes.array,
  species: PropTypes.string
}