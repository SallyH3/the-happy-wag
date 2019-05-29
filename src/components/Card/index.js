import React from 'react';

const Card = (props) => {
  return (
    <section className='card-display'>
      <article className='card-layout'>

        <p className='test'>...Image will go here...</p>
        
        <p className='details'>{props.name}</p>
        <p className='details'>{props.age}</p>
        <p className='details'>{props.gender}</p>
      </article>
    </section>
  )
}

export default Card;