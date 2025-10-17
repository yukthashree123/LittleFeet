"use client";
import Carousel from "@/app/components/organisms/Carousel/Carousel";

export default function HomePage() {
  const images = [
    "https://images.unsplash.com/photo-1503457574463-5a412ba3a9e7?w=1920",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1920",
    "https://images.unsplash.com/photo-1504151932400-72d4384f04b3?w=1920",
  ];

  return (
    <main>
      <h1>Welcome to Little Feet</h1>
      <Carousel images={images} />
    </main>
  );
}
