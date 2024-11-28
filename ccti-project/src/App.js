import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import DetailsPage from './components/DetailsPage';
import ThreatIntelligence from "./components/ThreatIntelligence";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/threat-intelligence" element={<ThreatIntelligence />} /> 
      </Routes>
    </Router>
  );
};

export default App;

