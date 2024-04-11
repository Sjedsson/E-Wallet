import React from 'react';
import Card from './Card';

const CardStack = ({ cards }) => {
  return (
    <div className="card-stack">
      {cards.map((cardData, index) => (
        <Card key={index} cardData={cardData} />
      ))}
    </div>
  );
};

export default CardStack;
