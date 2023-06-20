import React from 'react';
import './finance.css';

function FinancePage() {
  return (
    <div>

      <div className="eligible-loans">
        <h2>Eligible Financial Opportunities</h2>
        <ul>
          <li>Loan/Grant 1</li>
          <li>Loan/Grant 2</li>
          <li>Loan/Grant 3</li>
          {/* Add more eligible loans/grants */}
        </ul>
      </div>

      <div className="upcoming-grants">
        <h2>Upcoming Grants/Government Funding</h2>
        <ul>
          <li>Grant/Funding 1</li>
          <li>Grant/Funding 2</li>
          <li>Grant/Funding 3</li>
          {/* Add more upcoming grants/funding */}
        </ul>
      </div>
      
    </div>
  );
}

export default FinancePage;