import styles from './ProductList.module.css'
import ProductGrid from '../components/ProductGrid'

const Sunglasses = ({ openSidecart }) => {
    return (
        <div className={styles.productList}>
            {/* INTRO */}
            <div className={styles.productIntro}>
                <h1 className={styles.title}>
                    2025 Collection Sunglasses
                </h1>

                <p className={styles.text}>
                    Explore our 2025 Sunglasses Collection, 
                    showcasing distinctive and innovative 
                    frames in a variety of colors and shapes.
                </p>
            </div>

            {/* PRODUCT GRID */}
            <ProductGrid 
                category="sunglasses" 
                openSidecart={openSidecart}
            />
        </div>
    );
};

export default Sunglasses
