import React from 'react';
import ProductCard from '@/app/components/molecules/ProductCard/ProductCard';
import styles from './productGrid.module.css';

interface Product {
  title: string;
  price: string;
  image: string;
  inWishlist?: boolean;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className={styles.grid}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          price={product.price}
          image={product.image}
          inWishlist={product.inWishlist}
        />
      ))}
    </div>
  );
}
