import React from 'react';

const Card = (props) => {
  return (
    <section>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.gender}</p>
    </section>
  )
}

export default Card;