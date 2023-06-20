import React from 'react';
import './finance.css';
import 'bootstrap/dist/css/bootstrap.css';
import HappyFarmer from './images/happy.webp';
import HeadBG from './images/TreeBackground.jpg';

function FinancePage() {
  return (
    <div>
      <div className="head">
        <h1>Funding Opportunities</h1>
        <img src={HappyFarmer} className="fluid" alt="Happy Farmer" />
      </div>

      <div className="opportunities">
        <h2>Opportunities personalized for you</h2>
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img src="/path/to/image.jpg" alt="Image" className="img-thumbnail" />
              <div className="ml-3">
                <span className="badge badge-success">$100</span>
                <span className="ml-1 description">Item 1 Description</span>
              </div>
            </div>
            <span className="due-date">Due Date: 2023-06-30</span>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img src="/path/to/image.jpg" alt="Image" className="img-thumbnail" />
              <div className="ml-3">
                <span className="badge badge-success">$200</span>
                <span className="ml-1 description">Item 2 Description</span>
              </div>
            </div>
            <span className="due-date">Due Date: 2023-07-15</span>
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
                <span className="badge badge-success">$100</span>
                <span className="ml-1 description">Item 1 Description</span>
              </div>
            </div>
            <span className="due-date">Due Date: 2023-06-30</span>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img src="/path/to/image.jpg" alt="Image" className="img-thumbnail" />
              <div className="ml-3">
                <span className="badge badge-success">$200</span>
                <span className="ml-1 description">Item 2 Description</span>
              </div>
            </div>
            <span className="due-date">Due Date: 2023-07-15</span>
          </a>
          {/* Add more list items */}
        </div>
      </div>
    </div>
  );
}

export default FinancePage;
