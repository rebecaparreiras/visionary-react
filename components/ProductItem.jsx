import { Link } from 'react-router-dom';

import styles from './ProductItem.module.css';

import useCart from '../context/useCart';
import useSidecart from '../context/useSidecart';

const ProductItem = ({ product }) => {
    const { addToCart } = useCart();
    const { openSidecart } = useSidecart();

    const handleAddToCart = () => {
        addToCart(product);
        openSidecart();
    };

    return (
        <div className={styles.item}>
            <div className={styles.itemImage}>
                {/* Product images */}
                <Link to={`/products/${product.id}`}>
                    <img 
                        src={product.images.main} 
                        alt={`${product.name} - Front`} 
                        className={styles.mainImage}
                    />
                    <img 
                        src={product.images.hover} 
                        alt={`${product.name} - Side`} 
                        className={styles.hoverImage}
                    />
                </Link>

                {/* 'Add to cart' icon */}
                <div className={styles.itemAddToCart}>
                    <span 
                        onClick={handleAddToCart} 
                        className={styles.cartIcon} 
                        role="button" 
                    >
                        <i className="ri-shopping-bag-line"></i>
                    </span>
                </div>
            </div>

            {/* Product info */}
            <div className={styles.itemInfo}>
                <span className={styles.itemName}>
                    {product.name}
                </span>
                <span className={styles.itemPrice}>
                    ${product.price.toFixed(0)}
                </span>
            </div>
        </div>
    );
};

export default ProductItem;