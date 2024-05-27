import React from 'react';
import { Product } from 'shopify-buy';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    console.log(product);
    
  return (
    <div className="product-card">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      {/* <img src={product.images[0].src} alt={product.title} /> */}
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
