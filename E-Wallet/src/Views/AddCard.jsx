// AddCard.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../Redux/CardSlice';
import { useNavigate } from 'react-router-dom';
import Top from '../Components/Top';
import CardForm from '../Components/CardForm';
import CardPreview from '../Components/CardPreview';
import '../Components/card-form.css';

const AddCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cardDetails, setCardDetails] = useState({
    number: '',
    holder: '',
    expiry: '',
    cvv: '',
    vendor: '',
  });

  const handleAddCard = (cardDetails) => {
    dispatch(addCard(cardDetails));
    navigate('/');
  };

  return (
    <div className="add-card">
      <Top title="ADD A NEW BANK CARD" />
      <CardPreview cardDetails={cardDetails} />
      <CardForm 
        cardDetails={cardDetails} 
        setCardDetails={setCardDetails} 
        onSubmit={handleAddCard}
      />
    </div>
  );
};

export default AddCard;
