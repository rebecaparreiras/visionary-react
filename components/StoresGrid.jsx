import styles from './StoresGrid.module.css';
import stores from '../src/data/stores';
import StoreItem from './StoreItem';

const StoresGrid = () => {
    return (
        <section className={styles.storesGrid}>
            <div className={styles.container}>
                <div className={styles.itemsGrid}>
                    {stores.map(store => (
                        <StoreItem key={store.id} store={store} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StoresGrid;