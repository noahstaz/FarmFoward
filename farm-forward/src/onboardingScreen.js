import React, { useState } from 'react';
import './onboardingScreen.css';

const OnboardingScreen = () => {
  const [formIndex, setFormIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setFormIndex(formIndex + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  const renderForm = () => {
    switch (formIndex) {
      case 0:
        return (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
            <button type="submit">Next</button>
          </form>
        );
      case 1:
        // Render the second form component here
        return (
          <form onSubmit={handleSubmit}>
            {/* Second form fields */}
            <button type="submit">Next</button>
          </form>
        );
      // Add additional cases for more forms as needed
      default:
        return null;
    }
  };

  return (
    <div className="centered-box">
      <div className={`slide-container ${formIndex > 0 ? 'slide-left' : ''}`}>
        {renderForm()}
      </div>
    </div>
  );
};

export default OnboardingScreen;
