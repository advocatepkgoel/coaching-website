import React from "react";
import styles from "./App.module.css";
import { FaBook, FaChalkboardTeacher, FaGraduationCap, FaWhatsapp } from "react-icons/fa";
import mentorImage from "./assets/Praveen.png"; // Importing the image from the assets folder.

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <h1 className={styles.title}>Commerce Expert & Analyst</h1>
        <img src={mentorImage} alt="Praveen Goel, Commerce Mentor" className={styles.mentorImage} />
        <p className={styles.subtitle}>
          Praveen Goel (30 Yrs. Exp.) - India's No.1 Commerce Mentor
        </p>
      </header>

      {/* About Section */}
      <section className={styles.about}>
        <p>Specializing in Accounts, Economics, Business Studies, XI, XII, B.Com, CA Foundation, CS Foundation, CUET.</p>
      </section>

      {/* Special Features */}
      <section className={styles.features}>
        <h2>Why Choose Us?</h2>
        <div className={styles.grid}>
          {[
            { icon: <FaGraduationCap />, text: "100% Score Guarantee" },
            { icon: <FaBook />, text: "All 3 Subjects (Acc, Eco, B.St.)" },
            { icon: <FaChalkboardTeacher />, text: "Expert Faculty with 30+ Years Exp." },
            { icon: <FaBook />, text: "Free Trial Classes & Online Sessions" },
            { icon: <FaChalkboardTeacher />, text: "Crash Courses & Quick Revisions" },
            { icon: <FaGraduationCap />, text: "Prediction of Exam Questions" },
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
        <p>📞 Mobile: <strong>8929798833</strong></p>
        <p>📧 Email: <strong>advocatepkgoel@gmail.com</strong></p>
        <a href="https://wa.me/918929798833" className={styles.whatsappButton}>
          <FaWhatsapp size={24} /> Chat on WhatsApp
        </a>
        <p className={styles.guessPaper}>Request a <strong>Free Guess Paper</strong> (70%-90% Questions Expected!)</p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        © {new Date().getFullYear()} Praveen Goel Coaching. All Rights Reserved.
      </footer>
    </div>
  );
};

export default App;
