import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import { updateCardOrder } from '../Redux/CardSlice';
import './card-styles.css';

const CardStack = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.card.cards);

  // Handler for clicking a card in the stack
  const handleCardClick = (index) => {
    // This logic assumes that the active card is always the first one in the array
    const selectedCard = cards[index];
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    updatedCards.unshift(selectedCard);

    dispatch(updateCardOrder(updatedCards)); // Dispatch the update order action
  };

  return (
    <div className="card-stack">
      {cards.map((cardData, index) => (
        <div
          className={`card-wrapper ${index === 0 ? 'active' : 'inactive'}`}
          key={cardData.id}
          onClick={() => handleCardClick(index)}
        >
          <Card
            cardData={cardData}
            // Passing down the index === 0 check as a prop to Card
            isActive={index === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default CardStack;
