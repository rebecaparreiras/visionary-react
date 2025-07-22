import styles from './StoreItem.module.css';

const StoreItem = ({ store }) => {
    return (
        <div className={styles.item}>
            <div className={styles.itemImage}>
                <img 
                    src={store.image} 
                    alt={`${store.name}`} 
                />
            </div>

            <div className={styles.itemInfo}>
                <span className={styles.itemName}>
                    {store.name}
                </span>
                <span className={styles.itemOpeningHours}>
                    {store.openingHours}
                </span>
            </div>
        </div>
    );
};

export default StoreItem;