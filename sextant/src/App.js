
import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (
    <div className="app">
      <Banner />
      <Exhibit title="IP Metrics">
        
      </Exhibit>
      <Exhibit title="Latency Metrics">
        
      </Exhibit>
    </div>
  );
}

export default App;