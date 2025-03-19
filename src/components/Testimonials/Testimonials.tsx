// src/components/Testimonials/Testimonials.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import styles from './Testimonials.module.css';
import defaultAvatar from '../../assets/images/testimonials/default-avatar.svg';
import maleAvatar from '../../assets/images/testimonials/male.svg';
import femaleAvatar from '../../assets/images/testimonials/female.svg';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "CA Final Student",
    image: femaleAvatar, // You can add default avatar images
    quote: "Thanks to this coaching institute, I scored 95% in Accounts. The faculty's approach to complex topics made learning enjoyable and effective.",
    score: "95% in Accounts",
    background: "#c6f6d5",
    color: "#25D366"
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "CS Foundation",
    image: maleAvatar,
    quote: "The personalized attention and detailed study materials helped me crack CS Foundation in my first attempt. Best commerce coaching in Delhi!",
    score: "AIR 15",
    background: "#feebc8",
    color: "#ed8936"
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Class XII Student",
    image: femaleAvatar,
    quote: "I improved my Economics score from 75% to 98% in just three months. The practical examples and case studies really helped understand concepts better.",
    score: "98% in Economics",
    background: "#e9d8fd",
    color: "#805ad5"
  },
  {
    id: 4,
    name: "Arjun Singh",
    role: "B.Com Graduate",
    image: maleAvatar,
    quote: "The CUET preparation program was excellent. The mock tests and problem-solving sessions were invaluable for my preparation.",
    score: "99.8 percentile in CUET",
    background: "#fed7d7",
    color: "#e53e3e"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
      }
      return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
    });
  };

  return (
    <div className={styles.testimonialSection}>
      <h2 className={styles.sectionTitle}>What Our Students Say</h2>
      
      <div className={styles.carouselContainer}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            className={styles.testimonialCard}
            style={{ 
              backgroundColor: testimonials[currentIndex].background,
              color: testimonials[currentIndex].color
            }}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <div className={styles.testimonialContent}>
              <FaQuoteLeft className={styles.quoteIcon} />
              
              <motion.div 
                className={styles.testimonialText}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p className={styles.quote}>{testimonials[currentIndex].quote}</p>
                
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorImage}>
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = defaultAvatar; // Fallback image
                      }}
                    />
                  </div>
                  <div className={styles.authorInfo}>
                    <h3>{testimonials[currentIndex].name}</h3>
                    <p className={styles.role}>{testimonials[currentIndex].role}</p>
                    <p className={styles.score}>{testimonials[currentIndex].score}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button 
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={() => paginate(-1)}
          aria-label="Previous testimonial"
        >
          <FaChevronLeft />
        </button>
        <button 
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={() => paginate(1)}
          aria-label="Next testimonial"
        >
          <FaChevronRight />
        </button>

        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
