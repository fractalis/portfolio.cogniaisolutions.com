'use client';
import React, { useRef, useEffect, ReactNode, useState } from 'react';
import styles from './FullPageSections.module.css';

interface SectionProps {
  children: ReactNode;
  backgroundColor: string;
}

const Section = ({ children, backgroundColor }: SectionProps) => (
    <div className={`${styles.section} ${backgroundColor === 'grey' ? styles['grey-main'] : styles['grey-alt']}`}>
      {children}
    </div>
  );

interface FullPageSectionsProps {
  children: ReactNode;
}

const FullPageSections = ({ children }: FullPageSectionsProps) => {
  const [renderKey, setRenderKey] = useState(0);
  const sectionsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
            window.location.hash = `#section-${index + 1}`;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [renderKey]); // Add renderKey as a dependency to re-add the event listener

  useEffect(() => {
    setRenderKey((prevKey) => prevKey + 1); // Trigger re-render when sectionsRef changes
  }, [sectionsRef]);

  return (
    <div>
      {React.Children.map(children, (child, index) => (
        <Section
        key={index}
        backgroundColor={index % 2 === 0 ? 'grey' : 'grey-alt'} // Example background colors
        >
        {child}
        </Section>
      ))}
    </div>
  );
};

export default FullPageSections;
