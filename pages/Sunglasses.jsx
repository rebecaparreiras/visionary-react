import styles from './ProductList.module.css';
import { Helmet } from 'react-helmet';

import ProductGrid from '../components/ProductGrid';

const Sunglasses = ({ openSidecart }) => {
    return (
        <>
            <Helmet>
                <title>Visionary | Sunglasses</title>
                <meta name="description" content="See clearly, live boldly." />
            </Helmet>

            <div className={styles.productList}>
                {/* Intro */}
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

                {/* Product grid */}
                <ProductGrid 
                    category="sunglasses" 
                    openSidecart={openSidecart}
                />
            </div>
        </>
    );
};

export default Sunglasses;
