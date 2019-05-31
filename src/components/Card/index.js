import React from 'react';
import CardDetails from '../CardDetails';
import { Link } from 'react-router-dom';

export const Card = (props) => {
  const { photo } = props
  console.log('photo', photo[0])
  let medium = '';
  if (photo[0]) {
    medium = photo[0].medium
  }
  return (
    <Link to = {`/CardDetails/${props.id}`} style={{ textDecoration: 'none' }}>
      <section className='card-display'>
        <article className='card-layout'>
        <img src={ `${ medium }` } />
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