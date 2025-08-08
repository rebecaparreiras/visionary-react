import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import HomeProductGrid from '../components/HomeProductGrid.jsx';
import ProductCarousel from '../components/ProductCarousel.jsx';

import homeBannerImage from '../src/assets/images/home-banner-06.jpg';
import glassesImage from '../src/assets/images/banner-glasses.jpg';
import sunglassesImage from '../src/assets/images/banner-sunglasses.jpg';

const Home = () => {
    const { openSidecart } = useOutletContext();

    return (
        <>
            <Helmet>
                <title>Visionary | Glasses & Sunglasses</title>
                <meta name="description" content="See clearly, live boldly." />
            </Helmet>

            <div className={styles.home}>
                <div className={styles.container}>
                    {/* Hero banner */}
                    <div className={styles.homeBanner}>
                        <img 
                            src={homeBannerImage} 
                            alt="Female model wearing glasses" 
                            className={styles.bannerImage}
                        />
                    </div>

                    {/* Title */}
                    <div className={styles.homeTitle}>
                        <h2>Best-sellers</h2>
                    </div>

                    {/* Product carousel */}
                    <ProductCarousel openSidecart={openSidecart} />

                    {/* Product banners */}
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

                    {/* Home product grid */}
                    <HomeProductGrid openSidecart={openSidecart} />
                </div>
            </div>
        </>
    );
};

export default Home;