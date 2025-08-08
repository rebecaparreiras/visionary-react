import styles from './Sidecart.module.css';
import { Link } from 'react-router-dom';

import useCart from '../context/useCart';
import useSidecart from '../context/useSidecart';

const Sidecart = () => {
    const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();
    const { isSidecartOpen, closeSidecart } = useSidecart();

    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className={`${styles.sidecart} ${isSidecartOpen ? styles.sidecartActive : ''}`}>
            <div className={styles.cartContent}>
                {/* Sidecart header */}
                <div className={styles.cartHeader}>
                    <span className={styles.num}>
                        {totalItems}
                    </span>

                    <h2>Cart</h2>

                    <span   
                    onClick={closeSidecart} 
                    className={styles.closeSidecart}>
                        &times;
                    </span>
                </div>

                <div className={styles.cartItemsContainer}>
                    {/* Products */}
                    {cartItems.map(item => (
                        <div key={item.id} className={styles.cartItem}>
                            <img src={item.images.main} alt={item.name} className={styles.cartItemImage} />
                            <span>{item.name.split(' ')[0]}</span>
                            <div className={styles.quantityControls}>
                                <button 
                                    onClick={() => updateQuantity(item.id, -1)} 
                                    disabled={item.quantity === 1}
                                >-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                            </div>
                            <span>${item.price}</span>
                            <button onClick={() => removeFromCart(item.id)} className={styles.removeButton}>&times;</button>
                        </div>
                    ))}
                </div>
                
                {/* Sidecart footer */}
                <div className={styles.cartActions}>
                    <div className={styles.cartSubtotal}>
                        <p>Subtotal:</p>
                        <p>$<span>{subtotal.toFixed(0)}</span></p>
                    </div>

                    <div className={styles.cartButtonCheckout}>
                        <Link to="/checkout">
                            <button>Checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidecart;