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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f5f5f0" fill-opacity="1" d="M0,64L60,90.7C120,117,240,171,360,181.3C480,192,600,160,720,128C840,96,960,64,1080,64C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>

      <div className="opportunities">
        <h2>For Sale</h2>
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
            <img src={require("./images/tracktor.jpg")} alt="Image" className="img-thumbnail" />
              <div className="ml-3">
                <span className="dollar">$45,600</span>
                <span className="ml-1 description">2016 John Deer Tractor</span>
              </div>
            </div>
            <span className="due-date">Date listed: 2023-05-30</span>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
            <img src={require("./images/combine.jpg")} alt="Image" className="img-thumbnail" />
              <div className="ml-3">
                <span className="dollar">$250,000</span>
                <span className="ml-1 description">2020 Case IH Combine</span>
              </div>
            </div>
            <span className="due-date">Date listed: 2023-06-15</span>
          </a>
          {/* Add more list items */}
        </div>
      </div>

      <div className="upcoming">
        <h2>For Rent</h2>
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
            <img src={require("./images/canada.jpg")} alt="Image" className="img-thumbnail" />
              <div className="ml-3">
                <span className="dollar">$100,000</span>
                <span className="ml-1 description">Governement of Canada new farmers subsidy</span>
              </div>
            </div>
            <span className="due-date">Rental Period: May 2023 - September 2023</span>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
            <img src={require("./images/Cultivator.jpg")} alt="Image" className="img-thumbnail" />
              <div className="ml-3">
                <span className="dollar">$10,000</span>
                <span className="ml-1 description">Cultivator's 24 hour AgTech startup competition</span>
              </div>
            </div>
            <span className="due-date">Rental period: October 2023 - April 2024</span>
          </a>
          {/* Add more list items */}
        </div>
      </div>
      <Footer/>
    </div>
);
}

export default EquipmentPage;