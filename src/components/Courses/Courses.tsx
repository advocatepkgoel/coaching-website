// src/components/Courses/Courses.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaClock, FaUsers, FaStar } from 'react-icons/fa';
import styles from './Courses.module.css';

const courseCategories = [
  "All Courses",
  "Class XI-XII",
  "CA Foundation",
  "CS Foundation",
  "CUET Preparation"
];

const coursesData = [
  {
    id: 1,
    title: "Accountancy XI-XII",
    category: "Class XI-XII",
    description: "Comprehensive coverage of CBSE Accountancy syllabus with practical problems and case studies.",
    features: [
      "Complete syllabus coverage",
      "Regular mock tests",
      "Practical problem solving",
      "Previous year papers"
    ],
    duration: "1 Year",
    batchSize: "30 students",
    rating: 4.9,
    image: "/images/accountancy.jpg",
    highlights: [
      "100% success rate",
      "Expert faculty",
      "Doubt clearing sessions",
      "Study material included"
    ]
  },
  {
    id: 2,
    title: "Business Studies XI-XII",
    category: "Class XI-XII",
    description: "Master business concepts with real-world examples and case-based learning approach.",
    features: [
      "Case study based learning",
      "Business news analysis",
      "Regular assessments",
      "Interactive sessions"
    ],
    duration: "1 Year",
    batchSize: "30 students",
    rating: 4.8,
    image: "/images/business-studies.jpg",
    highlights: [
      "Current affairs integration",
      "Industry examples",
      "Weekly tests",
      "Revision modules"
    ]
  },
  {
    id: 3,
    title: "Economics XI-XII",
    category: "Class XI-XII",
    description: "Understanding micro and macro economics through practical applications and current scenarios.",
    features: [
      "Theory with applications",
      "Numerical problem solving",
      "Graph analysis",
      "Market study"
    ],
    duration: "1 Year",
    batchSize: "30 students",
    rating: 4.9,
    image: "/images/economics.jpg",
    highlights: [
      "Real market examples",
      "Statistical analysis",
      "Regular practice",
      "Complete coverage"
    ]
  },
  {
    id: 4,
    title: "CA Foundation Complete",
    category: "CA Foundation",
    description: "Comprehensive preparation for CA Foundation with focus on all four papers.",
    features: [
      "All subjects covered",
      "Mock tests series",
      "Previous year analysis",
      "Expert guidance"
    ],
    duration: "6 Months",
    batchSize: "25 students",
    rating: 4.9,
    image: "/images/ca-foundation.jpg",
    highlights: [
      "Exam-oriented approach",
      "Regular assessment",
      "Doubt sessions",
      "Study material"
    ]
  },
  {
    id: 5,
    title: "CS Foundation Program",
    category: "CS Foundation",
    description: "Complete preparation for CS Foundation with focus on conceptual clarity and exam strategy.",
    features: [
      "Subject expertise",
      "Test series",
      "Performance tracking",
      "Study material"
    ],
    duration: "6 Months",
    batchSize: "25 students",
    rating: 4.8,
    image: "/images/cs-foundation.jpg",
    highlights: [
      "Strategic approach",
      "Regular practice",
      "Mock exams",
      "Personal attention"
    ]
  },
  {
    id: 6,
    title: "CUET Commerce",
    category: "CUET Preparation",
    description: "Specialized preparation for CUET Commerce section with comprehensive coverage.",
    features: [
      "Topic-wise preparation",
      "Mock tests",
      "Previous year analysis",
      "Expert guidance"
    ],
    duration: "4 Months",
    batchSize: "30 students",
    rating: 4.9,
    image: "/images/cuet.jpg",
    highlights: [
      "Exam pattern focus",
      "Regular assessment",
      "Performance analysis",
      "Study material"
    ]
  }
];

const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  const filteredCourses = coursesData.filter(course => 
    selectedCategory === "All Courses" || course.category === selectedCategory
  );

  return (
    <div className={styles.coursesContainer}>
      <motion.h1 
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Courses
      </motion.h1>

      {/* Categories */}
      <motion.div 
        className={styles.categories}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {courseCategories.map((category) => (
          <motion.button
            key={category}
            className={`${styles.categoryButton} ${
              selectedCategory === category ? styles.active : ''
            }`}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Course Grid */}
      <motion.div 
        className={styles.courseGrid}
        layout
      >
        <AnimatePresence>
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              className={styles.courseCard}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedCourse(course.id)}
            >
              <div className={styles.courseImage}>
                <img src={course.image} alt={course.title} />
                <div className={styles.rating}>
                  <FaStar /> {course.rating}
                </div>
              </div>
              <div className={styles.courseContent}>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className={styles.courseInfo}>
                  <div>
                    <FaClock /> {course.duration}
                  </div>
                  <div>
                    <FaUsers /> {course.batchSize}
                  </div>
                </div>
                <motion.button 
                  className={styles.enrollButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enroll Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Course Details Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div 
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div 
              className={styles.modalContent}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Modal content */}
              {(() => {
                const course = coursesData.find(c => c.id === selectedCourse);
                if (!course) return null;
                
                return (
                  <>
                    <button 
                      className={styles.closeButton}
                      onClick={() => setSelectedCourse(null)}
                    >
                      ×
                    </button>
                    <div className={styles.modalHeader}>
                      <img src={course.image} alt={course.title} />
                      <div>
                        <h2>{course.title}</h2>
                        <p className={styles.rating}>
                          <FaStar /> {course.rating}
                        </p>
                      </div>
                    </div>
                    <div className={styles.modalBody}>
                      <p>{course.description}</p>
                      <h3>Course Features</h3>
                      <ul className={styles.featuresList}>
                        {course.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                      <h3>Highlights</h3>
                      <div className={styles.highlights}>
                        {course.highlights.map((highlight, index) => (
                          <div key={index} className={styles.highlight}>
                            <FaGraduationCap />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                      <div className={styles.modalFooter}>
                        <div className={styles.courseDetails}>
                          <div>
                            <FaClock /> Duration: {course.duration}
                          </div>
                          <div>
                            <FaUsers /> Batch Size: {course.batchSize}
                          </div>
                        </div>
                        <motion.button 
                          className={styles.enrollButton}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Enroll Now
                        </motion.button>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Courses;
