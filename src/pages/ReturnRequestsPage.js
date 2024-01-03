import React, { useState } from 'react';
import ReturnRequestForm from '../components/ReturnRequestForm';
import ReturnRequestList from '../components/ReturnRequestList';

const ReturnRequestsPage = () => {
  const [returnRequests, setReturnRequests] = useState([]);

  const handleRequestSubmit = (newRequest) => {
    setReturnRequests([...returnRequests, { ...newRequest, id: Date.now() }]);
  };

  return (
    <div>
      <h1>Return Requests</h1>
      <ReturnRequestForm onSubmit={handleRequestSubmit} />
      <ReturnRequestList requests={returnRequests} />
    </div>
  );
};

export default ReturnRequestsPage;
