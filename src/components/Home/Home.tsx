// src/components/Home/Home.tsx
import React from 'react';
import FlashingBanner from '../FlashingBanner/FlashingBanner';
import Features from '../Features/Features';
import Testimonials from '../Testimonials/Testimonials';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <FlashingBanner />
      <section className={styles.hero}>
        {/* Hero content */}
      </section>

      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;
