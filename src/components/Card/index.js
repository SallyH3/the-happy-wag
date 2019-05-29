import React from 'react';

const Card = (props) => {
  return (
    <section className='card-display'>
      <article className='card-layout'>

        <p className='test'>...Image will go here...</p>

        <p className='details name'>{props.name}</p>
        <p className='details'>Age: {props.age}</p>
        <p className='details'>Gender: {props.gender}</p>
        <p className='details'>Species: {props.species}</p>
      </article>
    </section>
  )
}

export default Card;