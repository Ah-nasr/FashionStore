import { useState } from 'react';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const images = [
    './images/main-img1.jpg',
    './images/main-img2.jpg',
    './images/main-img3.jpg',
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  return (
    <div className="relative w-full h-[70vh]">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-contain"
      />
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent border-0 text-black"
      >
        <span className="text-4xl">&larr;</span>
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent border-0 text-black"
      >
        <span className="text-4xl">&rarr;</span>
      </button>
    </div>
  );
}

export default Carousel;