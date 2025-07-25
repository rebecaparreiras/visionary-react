import { Link } from 'react-router-dom';
import styles from './Checkout.module.css';
import { Helmet } from 'react-helmet-async';

import useCart from '../context/useCart';

import ProductCarousel from '../components/ProductCarousel.jsx';

const Checkout = () => {
  const { cartItems, subtotal, updateQuantity, removeFromCart } = useCart();

  return (
    <>
      <Helmet>
          <title>Visionary | Checkout</title>
          <meta name="description" content="See clearly, live boldly." />
      </Helmet>

      <div className={styles.checkoutContainer}>
        {/* Empty cart */}
        {cartItems.length === 0 ? (
          <p className={styles.checkoutEmpty}>Your cart is empty.</p>
        ) : (
          <div className={styles.checkoutItemContainer}>
            {/* Checkout products */}
            <h1>Checkout</h1>

            {cartItems.map((item) => (
              <div key={item.id} className={styles.checkoutItem}>
                {/* Item image */}
                <img src={item.images.main} alt={item.name} />

                {/* Item name */}
                <p className={styles.itemName}>{item.name}</p>

                {/* Item quantity */}
                <div className={styles.quantityControls}>
                    <button 
                        onClick={() => updateQuantity(item.id, -1)} 
                        disabled={item.quantity === 1}
                    >-</button>

                    <span>{item.quantity}</span>

                    <button onClick={() => updateQuantity(item.id, 1)}
                    >+</button>
                </div>

                {/* Item price */}
                <p className={styles.itemPrice}>${(item.price * item.quantity).toFixed(0)}</p>
                
                {/* Item removal */}
                <button onClick={() => removeFromCart(item.id)} 
                className={styles.removeButton}
                >&times;</button>
              </div>
            ))}

            <div className={styles.checkoutInfo}>
              {/* Subtotal */}
              <div className={styles.checkoutSubtotal}>
                <h3>Total: ${subtotal.toFixed(0)}</h3>
              </div>

              {/* Checkout button */}
              <div className={styles.checkoutBtn}>
                <Link to="/login">
                  <button>Checkout</button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Carousel title */}
        <h1 className={styles.carouselTitle}>You may also like</h1>

        {/* Product carousel */}
        <ProductCarousel />
      </div>
    </>
  );
};

export default Checkout;

