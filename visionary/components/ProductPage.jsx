import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './ProductPage.module.css';
import ProductCarousel from './ProductCarousel';

const ProductPage = ({ product }) => {
    if (!product) return <p>Product not found.</p>;

    return (
        <div className={styles.productPage}>
            <div className={styles.productInfo}>
                {/* PRODUCT CAROUSEL */}
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
                
                {/* PRODUCT DETAILS */}
                <div className={styles.productDetails}>
                    <h1 className={styles.productName}>
                        {product.name}
                    </h1>

                    <h1 className={styles.productPrice}>
                        <p>${product.price.toFixed(0)}</p>
                    </h1>

                    <button className={styles.productButton}>
                        Add to Cart
                    </button>

                    <p className={styles.productDescription}>
                        {product.description}
                    </p>

                    {/* Product Specifics */}   
                    <ul className={styles.productSpecifics}>
                        <li>Materials</li>
                        <li>Care Guide</li>
                        <li>Delivery and Payment</li>
                    </ul>        
                </div>
            </div>

            {/* TITLE */}
            <div className={styles.title}>
                <h2>You may also like</h2>
            </div>
            
            {/* PRODUCT CAROUSEL */}
            <ProductCarousel />
        </div>
    );
};

export default ProductPage;