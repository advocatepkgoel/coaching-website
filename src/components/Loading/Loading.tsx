// src/components/Loading/Loading.tsx
import React from 'react';
import styles from './Loading.module.css';

const Loading: React.FC = () => (
  <div className={styles.loadingContainer}>
    <div className={styles.spinner}></div>
    <p>Loading...</p>
  </div>
);

export default Loading;
