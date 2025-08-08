import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Layout from '../components/Layout';

import Home from '../pages/Home';
import Glasses from '../pages/Glasses';
import Sunglasses from '../pages/Sunglasses';
import Stores from '../pages/Stores';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import ProductDetails from '../pages/ProductDetails';

function App() {
  const [isSidecartOpen, setIsSidecartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSidecart = () => {
    setIsSidecartOpen(prev => !prev);
  };

  const openSidecart = () => {
    setIsSidecartOpen(true);
  };

  const closeSidecart = () => {
    setIsSidecartOpen(false);
  };

  const handleToggleMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <HelmetProvider>
      <Router>
        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                isSidecartOpen={isSidecartOpen}
                toggleSidecart={toggleSidecart}
                openSidecart={openSidecart}
                closeSidecart={closeSidecart}
                toggleMenu={handleToggleMenu}
                isMobileMenuOpen={isMobileMenuOpen}
              />
            }
          >
            <Route index element={<Home />} />
            <Route path="glasses" element={<Glasses />} />
            <Route path="sunglasses" element={<Sunglasses />} />
            <Route path="stores" element={<Stores />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="login" element={<Login />} />
            <Route path="products/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;