import React from 'react';
import styles from '../styles/Error.module.css';

const Error = ({ message, onClose }) => {
  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorMessage}>{message}</p>
      <span className={styles.errorClose} onClick={onClose}>&times;</span>
    </div>
  );
};

export default Error;