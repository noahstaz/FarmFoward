import React, { useState } from 'react';
import './contact.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './footer';
import Header from './header';

function Contact() {
    const [formIndex, setFormIndex] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        questions: '',
    });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = () => {
    if (formIndex === 0) {
      if (isFormFilled()){
        setFormIndex(1);
      }
      else {
        alert('Please fill in form.');
      }
    } else if (formIndex === 1) {
      if (formData.role !== '') {
        setFormIndex(2);
      } else {
        alert('Please select a role option.');
      }
    }
  };

  const isFormFilled = () => {
    return (
      formData.name !== '' &&
      formData.phone !== '' &&
      formData.email !== '' &&
      formData.password !== ''
    );
  };

  return (
    <div className="financeMain">
      <Header/>
      <div className="head">
        <div className="subTitle">Contact Us</div>
      </div>

      <div className="opportunities center-box mx-auto my-5">
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
            <label>Question:</label>
            <textarea
                className='my-2'
                value={formData.questions}
                onChange={handleInputChange}
            />
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </form>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;
