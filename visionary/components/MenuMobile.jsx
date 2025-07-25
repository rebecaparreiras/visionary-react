import { Link } from 'react-router-dom';

import styles from './MenuMobile.module.css';

const MenuMobile = ({ isOpen, closeMenu, scrolled }) => {
  return (
    <div className={
      `${styles.menuMobile} ${isOpen ? styles.open : ''}
      ${scrolled ? styles.scrolledMobileMenu : ''}`
    }>
      <nav>
        <ul className={styles.mobileNavList}>
          <li className={styles.mobileNavItem}>
            <Link to="/glasses" onClick={closeMenu}>Glasses</Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link to="/sunglasses" onClick={closeMenu}>Sunglasses</Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link to="/stores" onClick={closeMenu}>Stores</Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link to="/login" onClick={closeMenu}>Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuMobile;