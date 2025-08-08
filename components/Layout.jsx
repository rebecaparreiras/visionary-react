import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';
import TopBar from './TopBar';
import Footer from './Footer';
import Sidecart from './Sidecart';
import MenuMobile from './MenuMobile';

const Layout = ({ toggleSidecart, openSidecart }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuMobileOpen((prevState) => !prevState);
    console.log('isMenuMobileOpen changed to:', !isMenuMobileOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // if vw > 768px && menu is open
      if (window.innerWidth > 768 && isMenuMobileOpen) {
        setIsMenuMobileOpen(false); // closes menu
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuMobileOpen]);

  useEffect(() => {
    const handleScrollCloseMenu = () => {
      if (isMenuMobileOpen && window.scrollY > 0) {
        setIsMenuMobileOpen(false);
      }
    };

    if (isMenuMobileOpen) {
      window.addEventListener('scroll', handleScrollCloseMenu);
    }

    return () => {
      window.removeEventListener('scroll', handleScrollCloseMenu);
    }
  }, [isMenuMobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <TopBar />
      <Header 
        toggleSidecart={toggleSidecart} 
        isHome={isHome} 
        toggleMenu={toggleMenu}
        isMenuMobileOpen={isMenuMobileOpen}
        scrolled={scrolled}
      />
      <MenuMobile
        isOpen={isMenuMobileOpen}
        closeMenu={toggleMenu} 
        scrolled={scrolled}
      />
      <Sidecart />
      <main>
        <Outlet context={{ openSidecart }} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;