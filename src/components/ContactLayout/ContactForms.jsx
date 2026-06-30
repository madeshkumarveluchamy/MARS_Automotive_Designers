import React, { useState } from 'react';
import axios from 'axios';
import "./css/ContactForm.css";

const ContactForms = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    subject: 'Fleet Consultation',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('TRANSMITTING...');

    try {
      const res = await axios.post(
        'http://localhost:5000/api/contact',
        formData,
        {
          // High-End Move: Prevents Red Console Errors for 500 status
          validateStatus: (status) => status < 600 
        }
      );

      if (res.status === 200 && res.data.success) {
        setStatus('SUCCESS: BRIEF RECEIVED 😊');
        setFormData({ name: '', email: '', phone: '', location: '', subject: 'Fleet Consultation', message: '' });
        setTimeout(() => setStatus(""), 4000);
      } else {
        setStatus(`SERVICE UNAVAILABLE (${res.status})`);
        setTimeout(() => setStatus(""), 4000);
      }
    } catch (err) {
      setStatus("CONNECTION ERROR: CHECK NETWORK");
      setTimeout(() => setStatus(""), 4000);
    }
  };

  return (
    <div className="col-lg-6 d-flex flex-column justify-content-center bg-black text-white" id="contact-form">
      <div className="form-container mx-auto w-75">
        <h2 className="form-heading text-uppercase mb-5 tracking-widest maintit">Submit Technical Brief</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Row 1: Name */}
          <div className="mb-5">
            <label className="input-label text-uppercase small text-secondary mainsub">Contact Name</label>
            <input 
              type="text" name="name" value={formData.name} onChange={handleChange}
              className="form-control industrial-input maindes" placeholder="FULL NAME" required 
            />
          </div>

          {/* Row 2: Phone & Location */}
          <div className="row">
            <div className="col-md-6 mb-5 ">
              <label className="input-label text-uppercase small text-secondary mainsub">Contact Number</label>
              <input 
                type="tel" name="phone" value={formData.phone} onChange={handleChange}
                className="form-control industrial-input" placeholder="+91 00000 00000" required 
              />
            </div>
            <div className="col-md-6 mb-5">
              <label className="input-label text-uppercase small text-secondary mainsub">Operational Location</label>
              <input 
                type="text" name="location" value={formData.location} onChange={handleChange}
                className="form-control industrial-input" placeholder="CITY, STATE" required 
              />
            </div>
          </div>

          {/* Row 3: Email & Subject */}
          <div className="row">
            <div className="col-md-6 mb-5">
              <label className="input-label text-uppercase small text-secondary mainsub">Email Address</label>
              <input 
                type="email" name="email" value={formData.email} onChange={handleChange}
                className="form-control industrial-input  maindes" placeholder="ENGR@ORG.COM" required 
              />
            </div>
            <div className="col-md-6 mb-5">
              <label className="input-label text-uppercase small text-secondary mainsub">Subject Matter</label>
              <select 
                name="subject" value={formData.subject} onChange={handleChange}
                className="form-select industrial-input text-uppercase  maindes"
              >
                <option value="Fleet Consultation" className='text-black  maindes'>Fleet Consultation</option>
                <option value="Custom Design" className='text-black  maindes'>Custom Design</option>
                <option value="Technical Support" className='text-black  maindes'>Technical Support</option>
              </select>
            </div>
          </div>

          {/* Row 4: Message */}
          <div className="mb-5">
            <label className="input-label text-uppercase small text-secondary mainsub">Project Specifications</label>
            <textarea 
              name="message" value={formData.message} onChange={handleChange}
              className="form-control industrial-input maindes" rows="3" placeholder="DESCRIBE THE SCOPE..." required 
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn industrial-submit-btn w-100 text-uppercase fw-bold py-3 mt-4">
            {status ? status : <>Submit Inquiry <span className="ms-2">⚡</span></>}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForms;