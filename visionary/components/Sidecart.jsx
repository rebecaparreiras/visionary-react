import styles from './Sidecart.module.css';
import { Link } from 'react-router-dom';
import useCart from '../context/useCart';

const Sidecart = ({ isOpen, closeSidecart }) => {
    const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();

    return (
        <div className={`${styles.sidecart} ${isOpen ? styles.sidecartActive : ''}`}>
            <div className={styles.cartContent}>
                <div className={styles.cartHeader}>
                    <span className={styles.num}>
                        {cartItems.length}
                    </span>

                    <h2>Cart</h2>

                    <span   
                    onClick={closeSidecart} 
                    className={styles.closeSidecart}>
                        &times;
                    </span>
                </div>

                <div className={styles.cartItemsContainer}>
                    {/* products */}
                    {cartItems.map(item => (
                        <div key={item.id} className={styles.cartItem}>
                            <img src={item.images.main} alt={item.name} className={styles.cartItemImage} />
                            <span>{item.name}</span>
                            <div className={styles.quantityControls}>
                                <button 
                                    onClick={() => updateQuantity(item.id, -1)} 
                                    disabled={item.quantity === 1}
                                >-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                            </div>
                            <span>${item.price}</span>
                            <button onClick={() => removeFromCart(item.id)} className={styles.removeButton}>X</button>
                        </div>
                    ))}
                </div>

                <div className={styles.cartActions}>
                    <div className={styles.cartSubtotal}>
                        <p>Subtotal:</p>
                        <p>$<span>{subtotal.toFixed(2)}</span></p>
                    </div>

                    <div className={styles.cartButtonCheckout}>
                        <Link to="/checkout">
                            <button>Checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidecart;