import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  callout: string;
  imageSrc?: string;
  imageAlt?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, callout, imageSrc, imageAlt }) => {
  return (
    <div className="hero min-h-screen bg-base-200 rounded-lg"> 
      <div className="hero-content text-center">
        <div className="max-w-md">
          (imageSrc &&
          <img src={imageSrc} alt={imageAlt} className="mx-auto" />)
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{subtitle}</p>
          <div className="flex justify-center">{callout}</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
