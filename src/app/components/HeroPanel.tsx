import React, { CSSProperties } from 'react';

interface HeroPanelProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  callout: JSX.Element;
}

const HeroPanel: React.FC<HeroPanelProps> = ({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  callout,
}) => {
  const heroStyle: CSSProperties = {
    backgroundImage: `url(${imageSrc})`,
    backgroundPosition: 'right top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '25% 100%',
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow flex justify-center items-center">
        <div className="hero bg-base-200 rounded-lg" style={heroStyle}>
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">{title}</h1>
              <p className="py-6">{subtitle}</p>
              <div className="flex justify-center">{callout}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPanel;
