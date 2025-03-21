'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const baseInputClass =
  "p-3 bg-[#101010] rounded text-white w-full focus:border-[#df2c2c] focus:outline-none transition";
const errorInputClass = "border border-red-500";

const notificationVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (status && (status.type === 'success' || status.type === 'error')) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

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
    if (!validate()) return;

    setStatus({ type: 'loading', text: 'Sending...' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({ type: 'success', text: 'Message sent' });
        setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
      } else {
        const data = await res.json();
        setStatus({ type: 'error', text: `Failed to send message: ${data.error || 'Unknown error'}` });
      }
    } catch (error) {
      setStatus({ type: 'error', text: `Failed to send message: ${error.message}` });
    }
  };

  const getStatusStyles = () => {
    if (!status) return "";
    switch (status.type) {
      case 'loading':
        return "bg-blue-500 text-white";
      case 'success':
        return "bg-green-500 text-black";
      case 'error':
        return "bg-red-500 text-white";
      default:
        return "";
    }
  };

  const getStatusText = () => {
    if (!status) return "";
    switch (status.type) {
      case 'loading':
        return status.text;
      case 'success':
        return `✓ ${status.text}`;
      case 'error':
        return `✗ ${status.text}`;
      default:
        return "";
    }
  };

  return (
    <div className="bg-[#151515] text-white py-8 px-8 -mt-12 relative">
      <AnimatePresence>
        {status && (
          <motion.div
            key={status.type}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={notificationVariants}
            className={`
              fixed
              top-[120px] left-1/2
              -translate-x-1/2
              z-50
              px-8 py-4
              text-2xl font-bold
              shadow-lg
              rounded-xl
              ${getStatusStyles()}
            `}
          >
            {getStatusText()}
          </motion.div>
        )}
      </AnimatePresence>

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