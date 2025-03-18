// src/components/Contact/Contact.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Contact.module.css';

const contactMethods = [
  {
    icon: <FaWhatsapp size={28} />,
    title: 'WhatsApp',
    value: 'Chat on WhatsApp',
    link: 'https://wa.me/918929798833',
    backgroundColor: '#c6f6d5',
    color: '#25D366',
    hoverColor: '#128C7E'
  },
  {
    icon: <FaPhone size={28} />,
    title: 'Phone',
    value: '+91 89 29 79 8833',
    link: 'tel:+918929798833',
    backgroundColor: '#ebf8ff',
    color: '#4299e1',
    hoverColor: '#3182ce'
  },
  {
    icon: <FaEnvelope size={28} />,
    title: 'Email',
    value: 'advocatepkgoel@gmail.com',
    link: 'mailto:advocatepkgoel@gmail.com',
    backgroundColor: '#feebc8',
    color: '#ed8936',
    hoverColor: '#dd6b20'
  },
  {
    icon: <FaMapMarkerAlt size={28} />,
    title: 'Location',
    value: 'Delhi, India',
    link: 'https://maps.app.goo.gl/gagzubXnznM5fxuP7',
    backgroundColor: '#fed7d7',
    color: '#e53e3e',
    hoverColor: '#c53030'
  }
];

const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      <section className={styles.hero}>
        <h1>Contact Us</h1>
        <p>Get in touch with us for any queries or support</p>
      </section>

      <section className={styles.contactGrid}>
        {contactMethods.map((method, index) => (
          <motion.a
            href={method.link}
            target={method.title === 'WhatsApp' || method.title === 'Location' ? '_blank' : undefined}
            rel={method.title === 'WhatsApp' || method.title === 'Location' ? 'noopener noreferrer' : undefined}
            className={styles.contactCard}
            style={{
              backgroundColor: method.backgroundColor,
              color: method.color
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ 
              backgroundColor: method.color,
              color: '#ffffff',
              scale: 1.03,
              transition: { duration: 0.2 }
            }}
            key={method.title}
          >
            <div className={styles.iconWrapper}>
              {method.icon}
            </div>
            <h3>{method.title}</h3>
            <p>{method.value}</p>
          </motion.a>
        ))}
      </section>
    </div>
  );
};

export default Contact;
