import React, { useState, useEffect, useRef } from 'react';

interface FullScreenDivProps {
  children: React.ReactNode[];
}

const FullScreenDiv: React.FC<FullScreenDivProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const childHeight = useRef<number>(0);

  useEffect(() => {
    childHeight.current = wrapperRef.current?.clientHeight || 0;
  }, []);

  const handleScroll = () => {
    if (wrapperRef.current) {
      const scrollTop = wrapperRef.current.scrollTop;
      const newIndex = Math.floor(scrollTop / childHeight.current);
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (wrapperRef.current) {
        wrapperRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const containerHeight = wrapperRef.current?.clientHeight || 0;
    const cssRuleHeight = `${containerHeight}px`;

    document.documentElement.style.setProperty('--custom-height', cssRuleHeight);
  }, []);

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTo({
        top: activeIndex * childHeight.current,
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  return (
    <div className="fullscreen-wrapper" ref={wrapperRef}>
      {children.map((child, index) => (
        <div key={index} className={`fullscreen-section ${index === activeIndex ? 'active' : ''}`}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default FullScreenDiv;
