import React from 'react';
import './finance.css';

function Finance() {
  return (
    <div>
      <h1>Finance Page</h1>

      <div className="category">
        <h2>Category 1</h2>
        <ul>
          <li>Bullet point 1</li>
          <li>Bullet point 2</li>
          <li>Bullet point 3</li>
        </ul>
      </div>

      <div className="category">
        <h2>Category 2</h2>
        <ul>
          <li>Bullet point 1</li>
          <li>Bullet point 2</li>
          <li>Bullet point 3</li>
        </ul>
      </div>

      <div className="category">
        <h2>Category 3</h2>
        <ul>
          <li>Bullet point 1</li>
          <li>Bullet point 2</li>
          <li>Bullet point 3</li>
        </ul>
      </div>

      {/* Add more categories and bullet points */}
      
    </div>
  );
}

export default Finance;