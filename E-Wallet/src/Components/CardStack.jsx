import React, { useState } from 'react';
import Card from './Card';
import './card-styles.css'; // Import styles

const CardStack = ({ cards, addNewCard }) => {
  const [activeCardId, setActiveCardId] = useState(cards.length > 0 ? cards[0].id : null);

  const handleCardClick = (cardId) => {
    setActiveCardId(cardId); // Set the active card ID when a card is clicked
  };

  // We use inline styles for dynamic zIndex and translation based on card's state
  const getCardStyle = (cardId) => ({
    zIndex: cardId === activeCardId ? 10 : 1,
    transform: cardId === activeCardId ? 'translateY(0)' : 'translateY(15%)',
    opacity: cardId === activeCardId ? '1' : '0.7',
  });

  return (
    <div className="card-stack">
      {cards.map((cardData) => (
        <div className="card-wrapper" key={cardData.id} style={getCardStyle(cardData.id)} onClick={() => handleCardClick(cardData.id)}>
          <Card
            cardData={cardData}
            isActive={cardData.id === activeCardId}
          />
        </div>
      ))}
      <button onClick={addNewCard}>Add a New Card</button>
    </div>
  );
};

export default CardStack;
