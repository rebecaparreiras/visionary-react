import styles from './HomeProductGrid.module.css';
import products from '../src/data/products'; 

import ProductItem from './ProductItem';

const HomeProductGrid = () => {
    return (
        <div className={styles.homeProductGrid}>
            <div className={styles.container}>
                <div className={styles.itemsGrid}>
                    {products
                        .filter(product => ['naru-glasses', 'babo-sunglasses', 'gimpo-sunglasses'].includes(product.id))
                        .map(product => (
                            <ProductItem key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeProductGrid;