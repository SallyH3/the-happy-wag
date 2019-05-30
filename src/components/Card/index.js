import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <Link to = {`/CardDetails/${props.id}`}>
      <section className='card-display'>
        <article className='card-layout'>

          {/* <p className='photo'>{props.photo}</p> */}

          <p className='details name'>{props.name}</p>
          <p className='details'>Age: {props.age}</p>
          <p className='details'>Gender: {props.gender}</p>
          <p className='details'>Species: {props.species}</p>
        </article>
      </section>
    </Link>
  )
}

export default Card;