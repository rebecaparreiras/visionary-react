import styles from './ProductList.module.css'
import StoresGrid from '../components/StoresGrid'

const Stores = () => {
    return (
        <div className={styles.productList}>
            {/* INTRO */}
            <div className={styles.productIntro}>
                <h1 className={styles.title}>
                    Stores
                </h1>

                <p className={styles.text}>
                    A Visionary store wherever you are.
                </p>
            </div>

            {/* PRODUCT GRID */}
            <StoresGrid />
        </div>
    );
};

export default Stores
