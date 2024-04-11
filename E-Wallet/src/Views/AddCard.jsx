import React from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../Redux/CardSlice';
import Top from '../Components/Top';
import CardForm from '../Components/CardForm';
import CardPreview from '../Components/CardPreview';

const AddCard = () => {
  const dispatch = useDispatch();

  const handleAddCard = (cardDetails) => {
    // Here you might want to add more logic for validation or preprocessing
    dispatch(addCard(cardDetails));
  };

  return (
    <div className="add-card">
      <Top />
      <CardPreview />
      <CardForm onSubmit={handleAddCard} />
    </div>
  );
};

export default AddCard;
