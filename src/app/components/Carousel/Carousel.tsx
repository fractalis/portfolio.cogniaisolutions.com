'use client';

import React, { ReactNode, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Carousel.module.css';

type CarouselProps = {
  children: ReactNode[];
  scrollThreshold?: number; // Optional scroll threshold (percentage)
};

const Carousel: React.FC<CarouselProps> = ({ children, scrollThreshold = 0.3 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const destinationRef = useRef<HTMLDivElement>(null);
  const slideHeight = 66.67; // 2/3rds of the screen height

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const previousSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    const { deltaY } = event;

    if (deltaY > 0 && activeIndex !== children.length - 1) {
      nextSlide();
    } else if (deltaY < 0 && activeIndex !== 0) {
      previousSlide();
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    const destination = destinationRef.current;

    if (destination) {
      destination.innerHTML = '';
      const heroPanel = document.createElement('div');
      destination.appendChild(heroPanel);
      ReactDOM.render(
        children[activeIndex] as React.ReactElement
      , heroPanel);
    }
  }, [activeIndex]);

  return (
    <div
      className={styles.carousel}
      onWheel={handleScroll}
      style={{ height: '100vh', overflow: 'hidden' }}
    >
      <div
        className={styles.slideContainer}
        ref={containerRef}
        style={{
          height: `${children.length * 100}vh`,
          transform: `translateY(-${activeIndex * slideHeight}vh)`,
        }}
      >
         <div
           className={styles.slide + ' ' + styles.active}
           ref={destinationRef}>
          </div>
      </div>
    </div>
  );
};

export default Carousel;
