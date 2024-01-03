import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ReturnRequestsPage from './pages/ReturnRequestsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/return-requests" element={<ReturnRequestsPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
