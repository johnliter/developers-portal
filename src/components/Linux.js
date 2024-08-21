import React from 'react';
import ResourceCard from './ResourceCard';

function Linux() {
  const resources = [
    {
      title: 'Linux Kernel',
      description: 'The core of the Linux operating system.',
      link: 'https://www.kernel.org/',
    },
    {
      title: 'Debian',
      description: 'Debian is a free operating system (OS) for your computer.',
      link: 'https://www.debian.org/',
    },
    {
      title: 'Ubuntu',
      description: 'Ubuntu is an open-source software platform that runs everywhere from the PC to the server and the cloud.',
      link: 'https://ubuntu.com/',
    },
    {
      title: 'Arch Linux',
      description: 'A lightweight and flexible Linux distribution that tries to Keep It Simple.',
      link: 'https://www.archlinux.org/',
    },
    {
      title: 'Linux Mint',
      description: 'An elegant, easy to use, up to date and comfortable GNU/Linux desktop distribution.',
      link: 'https://linuxmint.com/',
    },
    {
      title: 'Fedora',
      description: 'Fedora creates an innovative, free, and open-source platform for hardware, clouds, and containers that enables software developers and community members to build tailored solutions for their users.',
      link: 'https://getfedora.org/',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Linux Resources</h2>
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

export default Linux;
