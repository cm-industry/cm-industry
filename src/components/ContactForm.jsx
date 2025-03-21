'use client';
import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // для отображения результата

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: false }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = true;
    if (!formData.lastName.trim()) newErrors.lastName = true;
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = true;
    if (!formData.subject.trim()) newErrors.subject = true;
    if (!formData.message.trim()) newErrors.message = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    try {
      const res = await fetch('pages/api/contact.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        // Можно очистить форму:
        setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
      } else {
        const data = await res.json();
        setStatus(`error: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      setStatus(`error: ${error.message}`);
    }
  };

  return (
    <div className="bg-[#151515] text-white py-8 px-8 -mt-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2
          className="text-3xl font-bold uppercase text-center text-[#f0f0f0] mb-5 tracking-wide"
          style={{
            fontFamily: 'Arial, sans-serif',
            transform: 'scaleY(0.85)',
            transformOrigin: 'center',
          }}
        >
          Contact Us
        </h2>
        <p className="text-center text-gray-400 mb-1">
          Fill out this form to let us know how we can help, and we will get back to you as soon as possible!
        </p>
        <p className="text-sm font-bold text-red-500 text-center mb-8">
          If you reach out to us, please check your spam folder as well — our reply may occasionally end up there.
        </p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 text-[#f0f0f0]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="First Name" 
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`${baseInputClass} ${errors.firstName ? errorInputClass : ""}`}
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`${baseInputClass} ${errors.lastName ? errorInputClass : ""}`}
            />
          </div>
          <input 
            type="email" 
            placeholder="Email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${baseInputClass} ${errors.email ? errorInputClass : ""}`}
          />
          <input 
            type="text" 
            placeholder="Subject" 
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`${baseInputClass} ${errors.subject ? errorInputClass : ""}`}
          />
          <textarea 
            placeholder="Message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`${baseInputClass} ${errors.message ? errorInputClass : ""} h-32`}
          ></textarea>

          <button
            type="submit"
            className="inline-block text-xl text-[#f0f0f0] transition py-2 px-6 underline-hover mt-1"
            style={{
              fontFamily: 'Arial, sans-serif',
              fontWeight: '700',
              textTransform: 'uppercase',
              transform: 'scaleY(0.9)',
              transformOrigin: 'center',
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
