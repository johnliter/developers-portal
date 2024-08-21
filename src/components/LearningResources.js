import React from 'react';
import ResourceCard from './ResourceCard';

function LearningResources() {
  const resources = [
    {
      title: 'freeCodeCamp',
      description: 'Learn to code for free.',
      link: 'https://www.freecodecamp.org',
    },
    {
      title: 'W3Schools',
      description: 'The world\'s largest web developer site.',
      link: 'https://www.w3schools.com',
    },
    {
      title: 'SoloLearn',
      description: 'Learn to code on the go.',
      link: 'https://www.sololearn.com/en/',
    },
    {
      title: 'The Coding Cards',
      description: 'A collection of cards to help you learn and remember coding concepts.',
      link: 'https://thecodingcards.com/',
    },
    {
      title: 'Exploit DB',
      description: 'The ultimate archive of exploits and vulnerable software.',
      link: 'https://www.exploit-db.com/exploits/47163/',
    },
    {
      title: 'Explain Shell',
      description: 'Match command-line arguments to their help text.',
      link: 'https://explainshell.com/',
    },
    {
      title: 'Linux Journey',
      description: 'A site to learn the Linux operating system.',
      link: 'https://linuxjourney.com/',
    },
    {
      title: 'Epic Web',
      description: 'Ship Modern Full-Stack Web Applications',
      link: 'https://www.epicweb.dev',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Learning Resources</h2>
      <div className="flex flex-wrap justify-center">
        {resources.map((resource, index) => (
          <ResourceCard 
            key={index}
            logo={resource.logo}
            title={resource.title}
            description={resource.description}
            link={resource.link}
          />
        ))}
      </div>
    </div>
  );
}

export default LearningResources;
