import React from 'react';
import ResourceCard from './ResourceCard';

function BackEnd() {
  const resources = [
    {
      title: 'Node.js',
      description: 'Node.js® is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
      link: 'https://nodejs.org/',
    },
    {
      title: 'Python',
      description: 'Python is a programming language that lets you work quickly and integrate systems more effectively.',
      link: 'https://www.python.org/',
    },
    {
      title: 'Laravel',
      description: 'Laravel is a web application framework with expressive, elegant syntax.',
      link: 'https://laravel.com/',
    },
    {
      title: 'Express',
      description: 'Fast, unopinionated, minimalist web framework for Node.js.',
      link: 'https://expressjs.com/',
    },
    {
      title: 'Django',
      description: 'The web framework for perfectionists with deadlines.',
      link: 'https://www.djangoproject.com/',
    },
    {
      title: 'PostgreSQL',
      description: 'The world\'s most advanced open source relational database.',
      link: 'https://www.postgresql.org/',
    },
    {
      title: 'Transform Tools',
      description: 'A collection of tools for transforming data.',
      link: 'https://transform.tools/',
    },
    {
      title: 'Appwrite',
      description: 'End to end backend server for frontend and mobile apps.',
      link: 'https://appwrite.io',
    },
    {
      title: 'Novu',
      description: 'Open-source notification infrastructure for developers.',
      link: 'https://docs.novu.co/getting-started/introduction',
    },
    {
      title: 'Descope',
      description: 'A comprehensive user management platform.',
      link: 'https://www.descope.com/',
    },
    {
      title: 'Fly.io',
      description: 'Deploy app servers close to your users.',
      link: 'https://fly.io/',
    },
    {
      title: 'FastHTML',
      description: 'Modern web applications in pure Python',
      link: 'https://fastht.ml',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Back End Resources</h2>
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

export default BackEnd;
