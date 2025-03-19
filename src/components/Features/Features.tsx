// src/components/Features/Features.tsx
import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";
import { FaRegNoteSticky } from "react-icons/fa6";
import { VscLaw } from "react-icons/vsc";
import { GiTeacher, GiSecretBook } from "react-icons/gi";
import { BsLightningChargeFill } from "react-icons/bs";
import styles from "./Features.module.css";

const features = [
  {
    icon: <FaGraduationCap />,
    title: "100% Score Guarantee",
    description: "Our proven methodology ensures your success with a money-back guarantee"
  },
  {
    icon: <FaBook />,
    title: "All 3 Subjects just @ ₹850",
    description: "Comprehensive coverage of Accounting, Economics, and Business Studies"
  },
  {
    icon: <GiSecretBook />,
    title: "Specialized coding technique",
    description: "Boost your learning in just 15 minutes"
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Expert Faculty",
    description: "Learn from professionals with 30+ years of experience"
  },
  {
    icon: <GiTeacher />,
    title: "FREE trial classes",
    description: "We offer trial classes for all subjects"
  },
  {
    icon: <BsLightningChargeFill />,
    title: "Crash courses",
    description: "We have a crash course for every test"
  },
  {
    icon: <FaRegNoteSticky />,
    title: "Keep you in check always",
    description: "Chapterwise assignments and daily tests"
  },
  {
    icon: <VscLaw />,
    title: "Become A -> Z Lawyer",
    description: "We provide end-to-end coaching that makes you a great lawyer"
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
