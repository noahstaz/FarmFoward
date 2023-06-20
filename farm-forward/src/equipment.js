import Footer from './footer';
import Header from './header';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './equipment.css';

function EquipmentPage() {
    return (
        <div className="financeMain">
      <Header/>
      <div className="head">
        <div className="subTitle">Equipment</div>
      </div>

      <div className="opportunities">
        <h2>Renting</h2>
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
            <img src={require("./images/fcc.jpg")} alt="Image" className="img-thumbnail" />
              <div className="ml-3">
                <span className="dollar">$1,000,000</span>
                <span className="ml-1 description">FCC loan for diverse candidates purchasing equipment</span>
              </div>
            </div>
            <span className="due-date">Expires on: 2023-07-30</span>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
            <img src={require("./images/regina.png")} alt="Image" className="img-thumbnail" />
              <div className="ml-3">
                <span className="dollar">$20,000</span>
                <span className="ml-1 description">City of Regina grant for family farms</span>
              </div>
            </div>
            <span className="due-date">Expires on: 2023-09-15</span>
          </a>
          {/* Add more list items */}
        </div>
      </div>

      <div className="upcoming">
        <h2>For Sale</h2>
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
            <img src={require("./images/canada.jpg")} alt="Image" className="img-thumbnail" />
              <div className="ml-3">
                <span className="dollar">$100,000</span>
                <span className="ml-1 description">Governement of Canada new farmers subsidy</span>
              </div>
            </div>
            <span className="due-date">Available on: 2023-09-19</span>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
            <img src={require("./images/Cultivator.jpg")} alt="Image" className="img-thumbnail" />
              <div className="ml-3">
                <span className="dollar">$10,000</span>
                <span className="ml-1 description">Cultivator's 24 hour AgTech startup competition</span>
              </div>
            </div>
            <span className="due-date">Available on: 2024-06-20</span>
          </a>
          {/* Add more list items */}
        </div>
      </div>
      <Footer/>
    </div>
);
}

export default EquipmentPage;