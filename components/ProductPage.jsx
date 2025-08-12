import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './ProductPage.module.css';
import ProductCarousel from './ProductCarousel';

import useCart from '../context/useCart';
import useSidecart from '../context/useSidecart';

const ProductPage = ({ product }) => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [product?.id]);

    const { addToCart } = useCart();
    const { openSidecart } = useSidecart();

    if (!product) return <p>Product not found.</p>;

    const handleAddToCart = () => {
        addToCart(product);
        openSidecart(); 
    };

    return (
        <>
            <Helmet>
                <title>Visionary | {product.name}</title>
                <meta name="description" content="See clearly, live boldly." />
            </Helmet>

            <div className={styles.productPage}>
                <div className={styles.productInfo}>
                    {/* Product carousel */}
                    <div className={styles.productCarousel}>
                        <div className={styles.carouselInner}>
                            <Swiper
                                modules={[Pagination]} 
                                pagination={{ clickable: true }}
                                spaceBetween={1}
                                breakpoints={{
                                    1400: { slidesPerView: 1 },
                                }}
                            >
                                {[product.images.main, product.images.hover].map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={image} alt={`${product.name} view ${index + 1}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    
                    {/* Product details */}
                    <div className={styles.productDetails}>
                        <h1 className={styles.productName}>
                            {product.name}
                        </h1>

                        <h1 className={styles.productPrice}>
                            <p>${product.price.toFixed(0)}</p>
                        </h1>

                        <button 
                            className={styles.productButton}
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>

                        <p className={styles.productDescription}>
                            {product.description}
                        </p>

                        {/* Product specifics */}   
                        <ul className={styles.productSpecifics}>
                            <li>Materials</li>
                            <li>Care Guide</li>
                            <li>Delivery and Payment</li>
                        </ul>        
                    </div>
                </div>

                {/* Title */}
                <div className={styles.title}>
                    <h2>You may also like</h2>
                </div>
                
                {/* Product carousel */}
                <ProductCarousel />
            </div>
        </>
    );
};

export default ProductPage;