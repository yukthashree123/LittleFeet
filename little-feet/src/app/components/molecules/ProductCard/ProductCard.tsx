import React from 'react';
import styles from './productCard.module.css';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  inWishlist?: boolean;
}

export default function ProductCard({ title, price, image, inWishlist }: Readonly<ProductCardProps>) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.info}>
        <div>
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
        <button className={styles.wishlist}>
          <Heart size={20} className={inWishlist ? styles.filled : styles.empty} />
        </button>
      </div>
    </div>
  );
}
