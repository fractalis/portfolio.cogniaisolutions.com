import FullPageSections from './components/FullPageSections/FullPageSections';
import HeroPanel from './components/HeroPanel';
import Project, { ProjectProps } from './components/Project';
import React from 'react';

const projects: ProjectProps[] = [
  {
      title: 'Portfolio Website',
      description: 'This website was built using Next.js and Tailwind CSS.',
      technologies: ['Git', 'Next.js', 'Tailwind CSS', 'ChatGPT', 'React'],
      duration: '1 week',
      client: 'Personal',
      role: 'Frontend Developer',
      accomplishments: ['Built a portfolio website to showcase my projects'],
      projectLink: 'https://portfolio.cogniaisolutions.com'
    },
    {
      title: 'CogniAI Solutions',
      description: 'CogniAI Solutions is a startup that provides AI solutions to businesses.',
      technologies: ['Wix', 'Google Analytics', 'Google Tag Manager'],
      duration: '1 month',
      client: 'CogniAI Solutions',
      role: 'Web Developer',
      accomplishments: ['Built a website for CogniAI Solutions'],
      projectLink: 'https://cogniaisolutions.com'
    }
]

export default function Home() {

  const components = [
    
  ];
  return (
    <main className="flex min-h-screen flex-col items-center px-8 py-4">
      <div className="main-container">
        <FullPageSections>
          <HeroPanel
            key="hero1"
            imageSrc="images/artificial_neural_001.png"
            imageAlt="Artifical Neural Network"
            title="Digital Horizons"
            subtitle="Scott Rallya's Portfolio"
            callout={<div></div>} />
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </FullPageSections>
      </div>
    </main>
  )
}
