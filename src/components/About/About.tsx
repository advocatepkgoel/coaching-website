// src/components/About/About.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaChartLine, FaUsers, FaClock } from 'react-icons/fa';
import styles from './About.module.css';
import mentorImage from '../../assets/Praveen.png';

const stats = [
  { icon: <FaGraduationCap />, value: '30+', label: 'Years Experience' },
  { icon: <FaUsers />, value: '10000+', label: 'Students Mentored' },
  { icon: <FaChartLine />, value: '95%', label: 'Success Rate' },
  { icon: <FaClock />, value: '24/7', label: 'Support' },
];

const expertise = [
  'Accounts',
  'Economics',
  'Business Studies',
  'CA Foundation',
  'CS Foundation',
  'CUET'
];

const About: React.FC = () => {
  return (
    <motion.div 
      className={styles.about}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={styles.title}
        >
          About Us
        </motion.h1>
        <motion.p 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={styles.subtitle}
        >
          Empowering Students Through Excellence in Education
        </motion.p>
      </section>

      {/* Mentor Profile Section */}
      <section className={styles.profile}>
        <div className={styles.profileContent}>
          <motion.div 
            className={styles.imageWrapper}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <img 
              src={mentorImage} 
              alt="Praveen Goel - Commerce Expert"
              className={styles.mentorImage}
            />
          </motion.div>
          <motion.div 
            className={styles.profileInfo}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2>Praveen Goel</h2>
            <h3>India's No.1 Commerce Mentor</h3>
            <p>
              With over three decades of experience in commerce education, 
              Praveen Goel has established himself as a leading authority in 
              the field. His innovative teaching methods and deep understanding 
              of the subject matter have helped thousands of students achieve 
              their academic goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        {stats.map((stat, index) => (
          <motion.div 
            key={stat.label}
            className={styles.statCard}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <div className={styles.statIcon}>{stat.icon}</div>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </motion.div>
        ))}
      </section>

      {/* Expertise Section */}
      <section className={styles.expertise}>
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Areas of Expertise
        </motion.h2>
        <div className={styles.expertiseGrid}>
          {expertise.map((item, index) => (
            <motion.div 
              key={item}
              className={styles.expertiseCard}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default About;
