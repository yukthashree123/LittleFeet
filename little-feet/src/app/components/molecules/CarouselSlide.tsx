import React from "react";
import Text from "../atoms/Text";
import Image from "next/image";

interface Slide {
  image: string;
  caption: string;
}

export default function CarouselSlide({ slide }: Readonly<{ slide: Slide }>) {
  return (
    <div className="relative w-full h-64">
      <Image
        src={slide.image}
        alt={slide.caption}
        width={300}
        height={300}
        className="w-full h-full object-cover rounded-2xl"
      />
      <div className="absolute bottom-4 left-6 bg-white/70 rounded-lg px-3 py-1">
        <Text variant="body" className="font-medium text-gray-800">
          {slide.caption}
        </Text>
      </div>
    </div>
  );
}
