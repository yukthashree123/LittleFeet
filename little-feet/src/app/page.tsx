import React from 'react';
import Carousel from './components/organisms/Carousel/Carousel';
import ProductCard from '@/app/components/molecules/ProductCard/ProductCard';
import styles from './page.module.css';

const sampleImages = [
  'https://picsum.photos/400/200?random=1',
  'https://picsum.photos/400/200?random=2',
  'https://picsum.photos/400/200?random=3',
];

const products = [
  { title: 'Baby Shoes', price: '$25', image: 'https://picsum.photos/200/200?baby1', inWishlist: true },
  { title: 'Soft Blanket', price: '$40', image: 'https://picsum.photos/200/200?baby2' },
  { title: 'Baby Bottle', price: '$15', image: 'https://picsum.photos/200/200?baby3' },
  { title: 'Teddy Bear', price: '$30', image: 'https://picsum.photos/200/200?baby4' },
  { title: 'Baby Hat', price: '$10', image: 'https://picsum.photos/200/200?baby5', inWishlist: true },
];

export default function Page() {
  return (
    <div className={styles.container}>
      <main>
      <Carousel images={sampleImages} />
    </main>
      <h2 className={styles.sectionTitle}>Most Bought Products</h2>
      <div className={styles.productsGrid}>
        {products.map((p, i) => (
          <ProductCard
            key={i}
            title={p.title}
            price={p.price}
            image={p.image}
            inWishlist={p.inWishlist}
          />
        ))}
      </div>
    </div>
  );
}
