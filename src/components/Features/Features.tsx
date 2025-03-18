// src/components/Features/Features.tsx
import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";
import styles from "./Features.module.css";

const features = [
  {
    icon: <FaGraduationCap />,
    title: "100% Score Guarantee",
    description: "Our proven methodology ensures your success"
  },
  {
    icon: <FaBook />,
    title: "All 3 Subjects",
    description: "Comprehensive coverage of Accounting, Economics, and Business Studies"
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Expert Faculty",
    description: "Learn from professionals with 30+ years of experience"
  }
];

const Features: React.FC = () => {
  return (
    <section className={styles.features}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.title}
      >
        Why Choose Us?
      </motion.h2>
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={styles.iconWrapper}>
              {feature.icon}
            </div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
