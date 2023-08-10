import React from 'react';
import './Exhibit.css'; // Create this CSS file for styling

function Exhibit({ title, children }) {
  return (
    <div className="exhibit">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Exhibit;