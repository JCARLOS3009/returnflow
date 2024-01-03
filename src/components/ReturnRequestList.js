import React from 'react';
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', options);
};
const ReturnRequestList = ({ requests }) => {
  return (
    <div>
      <h2>Return Requests</h2>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            <strong>Product:</strong> {request.productName} | <strong>Reason:</strong> {request.reason} | <strong>Date:</strong> {formatDate(request.date)}
          </li>
        ))}
      </ul>
    </div>
  );
};



export default ReturnRequestList;
