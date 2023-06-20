import React from 'react';
import './finance.css';
import 'bootstrap/dist/css/bootstrap.css';
import HappyFarmer from './images/happy.webp';
import HeadBG from './images/TreeBackground.jpg';

function FinancePage() {
  return (
    <div>
      <div className="head">
        <div className="subTitle">Funding Opportunities</div>
      </div>

      <div className="opportunities">
        <h2>Opportunities personalized for you</h2>
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img src="/path/to/image.jpg" alt="Image" className="img-thumbnail" />
              <div className="ml-3">
                <span className="badge badge-success">$1,000,000</span>
                <span className="ml-1 description">FCC loan for diverse candidates purchasing equipment</span>
              </div>
            </div>
            <span className="due-date">Expires on: 2023-07-30</span>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img src="/path/to/image.jpg" alt="Image" className="img-thumbnail" />
              <div className="ml-3">
                <span className="badge badge-success">$20,000</span>
                <span className="ml-1 description">City of Regina grant for family farms</span>
              </div>
            </div>
            <span className="due-date">Expires on: 2023-09-15</span>
          </a>
          {/* Add more list items */}
        </div>
      </div>

      <div className="upcoming">
        <h2>Upcoming opportunities</h2>
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img src="/path/to/image.jpg" alt="Image" className="img-thumbnail" />
              <div className="ml-3">
                <span className="badge badge-success">$100,000</span>
                <span className="ml-1 description">Governement of Canada new farmers subsidy</span>
              </div>
            </div>
            <span className="due-date">Available on: 2023-09-19</span>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img src="/path/to/image.jpg" alt="Image" className="img-thumbnail" />
              <div className="ml-3">
                <span className="badge badge-success">$10,000</span>
                <span className="ml-1 description">Cultivator's 24 hour AgTech startup competition</span>
              </div>
            </div>
            <span className="due-date">Available on: 2024-06-20</span>
          </a>
          {/* Add more list items */}
        </div>
      </div>
    </div>
  );
}

export default FinancePage;
