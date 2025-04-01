import React from "react";
import styles from "./App.module.css";
import { FaBook, FaChalkboardTeacher, FaGraduationCap, FaWhatsapp } from "react-icons/fa";
import mentorImage from "./assets/images/Praveen.png"; // Importing the image from the assets folder.

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <h1 className={styles.title}>LORD OF COMMERCE</h1>
        <h1 className={styles.title}>(SUPER EXPERT & ANALYST)</h1>
        <img src={mentorImage} alt="Praveen Goel, Commerce Mentor" className={styles.mentorImage} />
        <p className={styles.subtitle}>
          PRAVEEN GOEL (30 YRS.EXP.)(INDIA'S NO.1 COMMERCE MENTOR)
        </p>
      </header>

      {/* About Section */}
      <section className={styles.about}>
        <p>ACCOUNTANCY, ECO, BUSINESS STUDIES, LAW (GET 100% at Rs. 875/-)</p>
        <p>(XI, XII, B.COM, CUET, CA / CS FOUNDATION)</p>
      </section>

      {/* Special Features */}
      <section className={styles.features}>
        <h2>Why Choose Us?</h2>
        <div className={styles.grid}>
          {[
            { icon: <FaGraduationCap />, text: "ACCOUNTANCY + ECO + BUSINESS STUDIES (ALL AT RS. 875)" },
            { icon: <FaBook />, text: "SCORE 100%" },
            { icon: <FaChalkboardTeacher />, text: "FREE TRIAL CLASSES" },
            { icon: <FaBook />, text: "LEARN IN 15 MINUTES THROUGH CODING TECH." },
            { icon: <FaChalkboardTeacher />, text: "ONLINE / OFFLINE / REGULAR / PATRACHAR" },
            { icon: <FaGraduationCap />, text: "PREDICTOR OF EXAM QUESTIONS / DAILY TEST" },
          ].map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <h2>Contact Us</h2>
        <p>📞 Mobile: <strong><a href="tel:+918929798833">+91 89 29 79 88 33</a></strong></p>
        <p>📧 Email: <strong><a href="mailto:commerce.specialist.1411@gmail.com">commerce.specialist.1411@gmail.com</a></strong></p>
        <a href="https://wa.me/918929798833" className={styles.whatsappButton}>
          <FaWhatsapp size={24} /> Chat on WhatsApp
        </a>
        <p className={styles.guessPaper}>Send request on whatsapp for <strong>Free Guess Paper</strong> (70%-90% Questions Expected!)</p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        © {new Date().getFullYear()} Praveen Goel Coaching. All Rights Reserved.
      </footer>
    </div>
  );
};

export default App;
