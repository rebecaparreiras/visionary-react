import styles from './ProductList.module.css'
import ProductGrid from '../components/ProductGrid'

const Glasses = ({ openSidecart }) => {
    return (
        <div className={styles.productList}>
            {/* INTRO */}
            <div className={styles.productIntro}>
                <h1 className={styles.title}>
                    2025 Collection Glasses
                </h1>

                <p className={styles.text}>
                    Introducing the new 2025 Optical Collection. 
                    Discover a variety of eyewear styles, from sleek 
                    and translucent frames to colored frames featuring 
                    soft, elegant curves.
                </p>
            </div>

            {/* PRODUCT GRID */}
            <ProductGrid 
                category="glasses" 
                openSidecart={openSidecart}
            />
        </div>
    );
};

export default Glasses
