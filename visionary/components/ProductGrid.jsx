import styles from './ProductGrid.module.css';

import products from '../src/data/products'; 

import ProductItem from './ProductItem';

const ProductGrid = ({ category, openSidecart }) => {
    const filteredProducts = products.filter(product => product.category === category);

    return (
        <section className={styles.productGrid}>
            <div className={styles.container}>
                <div className={styles.itemsGrid}>
                    {filteredProducts.map(product => (
                        <ProductItem 
                            key={product.id} 
                            product={product} 
                            openSidecart={openSidecart}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;