import { useState, useEffect } from 'react';

import styles from './TopBar.module.css';

const messages = [
  'Experience Visionary with a Free Shipping Service',
  'Lens Prescription Order Guide',
  'App: 5% Off'
];

const TopBar = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // starts fade-out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length); // changes messages
        setFade(true); // starts fade-in
      }, 300); // fade-out timing
    }, 5000); // changes every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.topBar}>
      <p className={`${styles.message} ${fade ? styles.fadeIn : styles.fadeOut}`}>
        {messages[index]}
      </p>
    </div>
  );
};

export default TopBar;