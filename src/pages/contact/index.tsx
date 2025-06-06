import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './style.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Ping the server every 14 minutes to keep it alive
  useEffect(() => {
    const pingServer = async () => {
      try {
        await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
          method: 'GET'
        });
        console.log('Server pinged successfully');
      } catch (error) {
        console.log('Failed to ping server:', error);
      }
    };

    // Ping immediately when component mounts
    pingServer();

    // Then ping every 14 minutes
    const interval = setInterval(pingServer, 14 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (submitStatus === 'success') {
      setShowSuccessMessage(true);
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
        setSubmitStatus('idle');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      setIsSubmitting(true);
      console.log('Attempting to send message...');
      console.log('API URL:', import.meta.env.VITE_API_URL);

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify(formData)
      });

      console.log('Response:', response);
      
      const data = await response.json();
      console.log('Response data:', data);

      if (!response.ok) {
        throw new Error(data.message || `Server error: ${response.status}`);
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error: any) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      setErrors({
        message: error.message || 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <div className="contact-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-center mb-12"
        >
          Have a question or want to work together? Feel free to reach out!
        </motion.p>

        <form onSubmit={handleSubmit} className="contact-form">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="form-group"
          >
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`form-input ${errors.name ? 'border-red-500' : ''}`}
            />
            <AnimatePresence>
              {errors.name && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="error-message"
                >
                  {errors.name}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="form-group"
          >
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className={`form-input ${errors.email ? 'border-red-500' : ''}`}
            />
            <AnimatePresence>
              {errors.email && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="error-message"
                >
                  {errors.email}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="form-group"
          >
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows={4}
              className={`form-textarea ${errors.message ? 'border-red-500' : ''}`}
            />
            <AnimatePresence>
              {errors.message && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="error-message"
                >
                  {errors.message}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <AnimatePresence>
            {showSuccessMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="success-message mb-4"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
          </AnimatePresence>

          {submitStatus === 'error' && (
            <div className="error-message mb-4">
              {errors.message}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-button"
            >
              <div className="submit-button-content">
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner" />
                    <span>Sending... This might take up to a minute</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </div>
            </button>
            {isSubmitting && (
              <p className="text-sm text-gray-400 mt-2 text-center">
                Note: First submission might take longer as the server starts up
              </p>
            )}
          </motion.div>
        </form>

        <div className="social-section">
          <h3>Other ways to connect</h3>
          <div className="social-links">
            <a 
              href="https://github.com/yarenbulut" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="bi bi-github"></i>
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/yarenbulut" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="bi bi-linkedin"></i>
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:buluthaticeyaren@gmail.com"
              className="social-link"
            >
              <i className="bi bi-envelope"></i>
              <span>Email</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
