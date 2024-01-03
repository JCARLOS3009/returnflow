import React, { useState } from 'react';

const ReturnRequestForm = ({ onSubmit }) => {
  const [productName, setProductName] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ productName, reason });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product Name:
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
      </label>
      <br />
      <label>
        Reason for Return:
        <textarea value={reason} onChange={(e) => setReason(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit Request</button>
    </form>
  );
};

export default ReturnRequestForm;
