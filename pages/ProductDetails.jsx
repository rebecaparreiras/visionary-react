import { useParams } from 'react-router-dom';

import products from '../src/data/products';

import ProductPage from '../components/ProductPage';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return <ProductPage product={product} />;
};

export default ProductDetails;