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
    <div>
      <form onSubmit={handleSubmit}>
        {/* Поля формы */}
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          // ... 
        />
        {/* ... остальные поля */}
        <button type="submit">Send</button>
      </form>

      {status === 'success' && <p>Message sent successfully!</p>}
      {status?.startsWith('error') && <p style={{ color: 'red' }}>{status}</p>}
    </div>
  );
}
