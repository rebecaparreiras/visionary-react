import styles from './ProductList.module.css';
import { Helmet } from 'react-helmet-async';

import ProductGrid from '../components/ProductGrid';

const Glasses = ({ openSidecart }) => {
    return (
        <>
            <Helmet>
                <title>Visionary | Glasses</title>
                <meta name="description" content="See clearly, live boldly." />
            </Helmet>

            <div className={styles.productList}>
                {/* Intro */}
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

                {/* Product grid */}
                <ProductGrid 
                    category="glasses" 
                    openSidecart={openSidecart}
                />
            </div>
        </>
    );
};

export default Glasses;
