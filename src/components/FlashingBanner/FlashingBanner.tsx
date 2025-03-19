// src/components/Contact/FlashingBanner.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import styles from './FlashingBanner.module.css';

const FlashingBanner: React.FC = () => {
  return (
    <div className={styles.bannerContainer}>
      <motion.div 
        className={styles.banner}
        animate={{
          backgroundColor: ['#4299e1', '#48bb78', '#4299e1'],
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      >
        <div className={styles.content}>
          <motion.div 
            className={styles.textContent}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <h2>Send request with class and subject on whatsapp for FREE guess paper</h2>
            <p>70% - 90% questions expected from the guess paper</p>
          </motion.div>
          
          <div className={styles.actions}>
            <motion.a
              href="https://wa.me/918929798833"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.actionButton} ${styles.whatsappButton}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp /> WhatsApp
            </motion.a>
            <motion.a
              href="tel:+918929798833"
              className={`${styles.actionButton} ${styles.callButton}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhone /> Call Now
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FlashingBanner;
