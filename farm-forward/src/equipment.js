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
        <div className="subTitle">Land  & Equipment</div>
      </div>

      <div className="upcoming">
        <h2>Land for Sale Near You</h2>
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
            <img src={require("./images/AcresForSale1.jpg")} alt="Image" className="img-thumbnail" />
              <div className="ml-3">
                <span className="dollar">$14,800</span>
                <span className="ml-1 description">162 South West quarter of Section 1, Township 1, Range 12, West of the 1st Meridian</span>
              </div>
            </div>
            <span className="due-date">
            <div className="viewDetails"><button type="button">View Details</button></div>
              Date posted: 2023-05-24
            </span>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
            <img src={require("./images/AcresForSale2webp.webp")} alt="Image" className="img-thumbnail" />
              <div className="ml-3">
                <span className="dollar">$65,000</span>
                <span className="ml-1 description">210 Acres North West quarter of Section 1, Township 21, Range 1, West of the 2nd Meridian</span>
              </div>
            </div>
            <span className="due-date">
              <div className="viewDetails"><button type="button">View Details</button></div>
              Date posted: 2023-06-04
            </span>
          </a>
          {/* Add more list items */}
        </div>
      </div>

      <div className="opportunities">
        <h2>Equipment For Sale</h2>
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
            <img src={require("./images/tracktor.jpg")} alt="Image" className="img-thumbnail" />
              <div className="ml-3">
                <span className="dollar">$45,600</span>
                <span className="ml-1 description">2016 John Deer Tractor</span>
              </div>
            </div>
            <span className="due-date">
              <div className="viewDetails"><button type="button">View Details</button></div>
              Date listed: 2023-05-30
            </span>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
            <img src={require("./images/combine.jpg")} alt="Image" className="img-thumbnail" />
              <div className="ml-3">
                <span className="dollar">$250,000</span>
                <span className="ml-1 description">2020 Case IH Combine</span>
              </div>
            </div>
            <span className="due-date">
              <div className="viewDetails"><button type="button">View Details</button></div>
              Date listed: 2023-06-15
            </span>
          </a>
          {/* Add more list items */}
        </div>
      </div>

      <div className="upcoming">
        <h2>Equipment For Rent</h2>
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
            <img src={require("./images/Baler.jpg")} alt="Image" className="img-thumbnail" />
              <div className="ml-3">
                <span className="dollar">$4,000/month</span>
                <span className="ml-1 description">Baler Rental for the Summer intended for small farmers</span>
              </div>
            </div>
            <span className="due-date">
              <div className="viewDetails"><button type="button">View Details</button></div>
              Rental Period: May 2023 - September 2023
            </span>
          </a>
          <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
            <img src={require("./images/elevator.webp")} alt="Image" className="img-thumbnail" />
              <div className="ml-3">
                <span className="dollar">$2,000/month</span>
                <span className="ml-1 description">South Saskatchewan Grain Elevator</span>
              </div>
            </div>
            <span className="due-date">
              <div className="viewDetails"><button type="button">View Details</button></div>
              Rental period: October 2023 - April 2024
            </span>
          </a>
          {/* Add more list items */}
        </div>
      </div>

    
      <Footer/>
    </div>
);
}

export default EquipmentPage;