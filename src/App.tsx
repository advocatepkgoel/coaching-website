// src/App.tsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Loading from './components/Loading/Loading';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import styles from './App.module.css';

// Lazy load components
const Home = React.lazy(() => import('./components/Home/Home'));
const Courses = React.lazy(() => import('./components/Courses/Courses'));
const About = React.lazy(() => import('./components/About/About'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));

const App: React.FC = () => {
  return (
    <Router>
      <ErrorBoundary>
        <div className={styles.app}>
          <Header />
          <main className={styles.main}>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {/* Add other routes as needed */}
              </Routes>
            </Suspense>
          </main>
          <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Praveen Coaching Academy. All rights reserved.</p>
          </footer>
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
