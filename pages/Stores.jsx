import styles from './ProductList.module.css';
import { Helmet } from 'react-helmet';

import StoresGrid from '../components/StoresGrid';

const Stores = () => {
    return (
        <>
            <Helmet>
                <title>Visionary | Stores</title>
                <meta name="description" content="See clearly, live boldly." />
            </Helmet>

            <div className={styles.productList}>
                {/* Intro */}
                <div className={styles.productIntro}>
                    <h1 className={styles.title}>
                        Stores
                    </h1>

                    <p className={styles.text}>
                        A Visionary store wherever you are.
                    </p>
                </div>

                {/* Stores grid */}
                <StoresGrid />
            </div>
        </>
    );
};

export default Stores;
