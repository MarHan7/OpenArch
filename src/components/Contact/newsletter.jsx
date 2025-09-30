import React, { useState } from 'react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // 'loading', 'success', 'error'
  const [isInputVisible, setIsInputVisible] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/newsletter.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        console.error('Error:', data.error);
      }
    } catch (error) {
      setStatus('error');
      console.error('Network error:', error);
    }
  };

  return (
    <div className={styles.newsletter}>
      <h2 onClick={() => setIsInputVisible(!isInputVisible)}>Subscribe to Our Newsletter</h2>
      
      <form onSubmit={handleSubmit} className={`${styles.form} ${!isInputVisible ? styles.hidden : ''}`}>
        <div className={styles.inputGroup}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={status === 'loading'}
            className={styles.emailInput}
          />
          <button 
            type="submit" 
            disabled={status === 'loading'}
            className={styles.submitButton}
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        
        {status === 'success' && (
          <p className={styles.successMessage}>
            Thank you for subscribing!
          </p>
        )}
        
        {status === 'error' && (
          <p className={styles.errorMessage}>
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default Newsletter;