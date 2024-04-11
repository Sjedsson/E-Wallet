import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../Redux/CardSlice'; // Adjust the path as needed

// Import your CSS file here
import './card-form.css';

const CardForm = () => {
  const dispatch = useDispatch();
  const [cardDetails, setCardDetails] = useState({
    number: '',
    holder: '',
    expiry: '',
    cvv: '',
    vendor: '', // Added vendor to the card details state
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the addCard action with cardDetails as payload
    dispatch(addCard(cardDetails));
    // Reset the form fields after submitting
    setCardDetails({
      number: '',
      holder: '',
      expiry: '',
      cvv: '',
      vendor: '',
    });
  };

  return (
    <div className="card-form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="number"
          placeholder="Card Number"
          value={cardDetails.number}
          onChange={handleChange}
        />
        <input
          type="text"
          name="holder"
          placeholder="Card Holder"
          value={cardDetails.holder}
          onChange={handleChange}
        />
        <input
          type="text"
          name="expiry"
          placeholder="Valid Thru"
          value={cardDetails.expiry}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={cardDetails.cvv}
          onChange={handleChange}
        />
        <select
          name="vendor"
          value={cardDetails.vendor}
          onChange={handleChange}
          required
        >
          <option value="">Select vendor...</option>
          <option value="bitcoin-inc">BITCOIN INC</option>
          <option value="ninja-bank">NINJA BANK</option>
          <option value="block-chain-inc">BLOCK CHAIN INC</option>
          <option value="evil-corp">EVIL CORP</option>
        </select>
        <button type="submit">Save Card</button>
      </form>
    </div>
  );
};

export default CardForm;
