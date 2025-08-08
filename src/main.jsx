import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import { CartProvider } from '../context/CartContext';
import { SidecartProvider } from '../context/SidecartContext';

import App from './App.jsx';

import './index.css';
import './styles/global.css';
import './styles/variables.css';

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <StrictMode>
      <CartProvider>
        <SidecartProvider> 
          <App />
        </SidecartProvider>
      </CartProvider>
    </StrictMode>
  </HelmetProvider>
)
