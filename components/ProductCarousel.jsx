import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './ProductCarousel.module.css';
import products from '../src/data/products';
import ProductItem from './ProductItem';

const ProductCarousel = () => {
    return (
        <section className={styles.productCarousel}>
            <div className={styles.carouselInner}>
                <Swiper
                    // pagination = bullets
                    // navigation = arrows
                    modules={[Pagination]} 
                    pagination={{ clickable: true }}
                    spaceBetween={16}
                    breakpoints={{
                        0: { slidesPerView: 2 },
                        576: { slidesPerView: 2 },
                        1100: { slidesPerView: 3 },
                        1400: { slidesPerView: 5 },
                    }}
                >
                    {products.map(product => (
                        <SwiperSlide key={product.id}>
                            <ProductItem product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ProductCarousel;