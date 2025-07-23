import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

import useCart from '../context/useCart';
import useSidecart from '../context/useSidecart';

const Header = ({ toggleMenu, isMenuMobileOpen, scrolled }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  const { cartItems } = useCart();
  const { toggleSidecart } = useSidecart();

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // defines if it's at the top
      setIsAtTop(currentScrollY === 0);

      // header visibility
      if (currentScrollY === 0) {
        // if it's invisible, it's changed to visible
        if (!isHeaderVisible) { 
          setIsHeaderVisible(true);
        }
        // clears any timeout to guarantee it doesn't disappear
        clearTimeout(scrollTimeout); 
        // exits the function since the header is already visible at the top
        return; 
      }

      // while scrolling:
      // if header = invisible && scrollY (is scrolling) > 0, hide header
      if (isHeaderVisible && currentScrollY > 0) {
        setIsHeaderVisible(false);
      }

      clearTimeout(scrollTimeout);

      // defines new timeout if the user stopped scrolling
      scrollTimeout = setTimeout(() => {
        // if header = invisible && scroll stopped, show header
        if (!isHeaderVisible) {
          setIsHeaderVisible(true);
        }
      }, 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isHeaderVisible]);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header 
      className={
        `${styles.header} ${scrolled ? styles.scrolledHeader : ''} 
        ${isHeaderVisible ? styles.headerVisible : styles.headerHidden}`
      }
    >
      <div className={styles.container}>
        <div className={styles.navWrapper}>
          {/* LINKS */}
          <div className={styles.navLinks}>
            <nav>
              <ul 
                aria-label="primary" 
                role="list" 
                className={`${styles.navList} ${isAtTop ? styles.whiteLinks : styles.blackLinks}`}
              >
                <li className={styles.navItem}>
                  <Link to="/glasses">Glasses</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/sunglasses">Sunglasses</Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/stores">Stores</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* LOGO + MENU MOBILE */}
          <div className={styles.navLogo}>
            {/* menu icon */}
            <span
              role="button"
              tabIndex={0}
              onClick={toggleMenu} 
              className={`${styles.menuOpen} ${isMenuMobileOpen ? styles.menuOpenActive : ''}
              ${isAtTop ? styles.whiteLinks : styles.blackLinks}
              `}
            >
              {/* menu bars */}
              <div className={styles.hamburger}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
              </div>
            </span>

            {/* logo */}
            <h2 
              className={`${styles.navList} ${isAtTop ? styles.whiteLinks : styles.blackLinks}`}
            >
              <Link to="/">visionary</Link>
            </h2>
          </div>

          {/* ICONS */}
          <div className={styles.navIcons}>
            <ul 
              aria-label="primary" 
              role="list"
              className={`${styles.navList} ${isAtTop ? styles.whiteLinks : styles.blackLinks}`}
            >
              <li>
                <span
                  onClick={() => setSearchOpen(!searchOpen)}
                  role="button"
                  tabIndex={0}
                  className={styles.searchOpen}
                >
                  <i className="ri-search-line"></i>
                </span>
              </li>
              <li>
                <Link to="/login">
                  <span className={styles.loginIcon}>
                    Login
                  </span>
                </Link>
              </li>
              <li className={styles.cartInfo}>
                <span 
                  onClick={toggleSidecart} 
                  className={styles.cartIcon} 
                  role="button" 
                  tabIndex={0}
                >
                  Cart
                </span>
                <span 
                  onClick={toggleSidecart}
                  className={styles.num}
                  role="button" 
                  tabIndex={0}
                >
                  {totalItems}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SEARCH */}
      <div className={`${styles.navSearch} ${searchOpen ? styles.navSearchVisible : ''}`}>
        <form>
          <div className={styles.navSearchBar}>
            <input
              type="search"
              className={styles.navSearchInput}
              placeholder="Search"
            />
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;