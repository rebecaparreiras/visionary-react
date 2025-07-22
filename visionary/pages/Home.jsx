import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

import HomeProductGrid from '../components/HomeProductGrid.jsx';
import ProductCarousel from '../components/ProductCarousel.jsx';

import glassesImage from '../src/assets/images/banner-glasses.jpg';
import sunglassesImage from '../src/assets/images/banner-sunglasses.jpg';

const Home = () => {
    const { openSidecart } = useOutletContext();

    return (
        <div className={styles.home}>
            <div className={styles.container}>
                {/* HERO BANNER */}
                <div className={styles.homeBanner}>
                    <img 
                        src="../src/assets/images/home-banner-06.jpg" 
                        alt="Female model wearing glasses" 
                        className={styles.bannerImage}
                    />
                </div>

                {/* TITLE */}
                <div className={styles.homeTitle}>
                    <h2>Best-sellers</h2>
                </div>

                {/* PRODUCT CAROUSEL */}
                <ProductCarousel openSidecart={openSidecart} />

                {/* PRODUCT BANNERS */}
                <div className={styles.homeProductBanners}>
                    
                    <div className={styles.productBannerGrid}>
                        <div 
                            className={styles.productBanner} 
                            style={{ backgroundImage: `url(${glassesImage})` }}
                        ></div>

                        <Link to="/glasses">
                            <div className={styles.bannerTitle}>
                                <h2>Glasses →</h2>
                            </div>
                        </Link>
                    </div>

                    <div className={`${styles.productBannerGrid} ${styles.reverseOrder}`}>
                        <Link to="/sunglasses">
                            <div className={styles.bannerTitle}>
                                <h2>Sunglasses →</h2>
                            </div>
                        </Link>
                        
                        <div 
                            className={styles.productBanner} 
                            style={{ backgroundImage: `url(${sunglassesImage})` }}
                        ></div>
                    </div>
                </div>

                {/* HOME PRODUCT GRID */}
                <HomeProductGrid openSidecart={openSidecart} />
            </div>
        </div>
    )
}

export default Home;