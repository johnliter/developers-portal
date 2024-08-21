import React from 'react';
import ResourceCard from './ResourceCard';

function FrontEnd() {
  const resources = [
    {
      title: 'React',
      description: 'A JavaScript library for building user interfaces.',
      link: 'https://reactjs.org/',
    },
    {
      title: 'Angular',
      description: 'One framework. Mobile & desktop.',
      link: 'https://angular.io/',
    },
    {
      title: 'Vue.js',
      description: 'The Progressive JavaScript Framework.',
      link: 'https://vuejs.org/',
    },
    {
      title: 'Svelte',
      description: 'Cybernetically enhanced web apps.',
      link: 'https://svelte.dev/',
    },
    {
      title: 'Bootstrap',
      description: 'The most popular HTML, CSS, and JS library in the world.',
      link: 'https://getbootstrap.com/',
    },
    {
      title: 'Tailwind CSS',
      description: 'A utility-first CSS framework for rapid UI development.',
      link: 'https://tailwindcss.com/',
    },
    {
      title: 'HTML Boilerplates',
      description: 'A collection of HTML boilerplates.',
      link: 'https://htmlboilerplates.com/',
    },
    {
      title: 'DaisyUI',
      description: 'Tailwind CSS components library.',
      link: 'https://daisyui.com/',
    },
    {
      title: 'PrismJS',
      description: 'A lightweight, extensible syntax highlighter.',
      link: 'https://prismjs.com/',
    },
    {
      title: 'Vite',
      description: 'Next Generation Frontend Tooling.',
      link: 'https://vitejs.dev/',
    },
    {
      title: 'Markdoc',
      description: 'A powerful, flexible, Markdown-based authoring framework.',
      link: 'https://markdoc.dev/',
    },
    {
      title: 'Uiverse',
      description: 'A collection of beautiful UI elements.',
      link: 'https://uiverse.io/',
    },
    {
      title: 'CSS Gradient',
      description: 'A free tool to create, generate, and apply CSS gradients.',
      link: 'https://cssgradient.io/',
    },
    {
      title: 'Coolors',
      description: 'The super fast color schemes generator!',
      link: 'https://coolors.co/',
    },
    {
      title: 'Starlight',
      description: 'The modern site builder.',
      link: 'https://starlight.astro.build/',
    },
    {
      title: 'SolidJS',
      description: 'Simple and performant reactivity for building user interfaces.',
      link: 'https://www.solidjs.com/',
    },
    {
      title: 'Astro',
      description: 'Build faster websites with Astro.',
      link: 'https://astro.build/',
    },
    {
      title: 'Qwik',
      description: 'Instant apps with the Qwik framework.',
      link: 'https://qwik.dev/',
    },
    {
      title: 'Glass',
      description: 'An AI copilot for React and Next.js developers.',
      link: 'https://useglass.ai',
    },
    {
      title: 'HowlerJS',
      description: 'An AI copilot for React and Next.js developers.',
      link: 'https://howlerjs.com/',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Front End Resources</h2>
      <div className="flex flex-wrap justify-center">
        {resources.map((resource, index) => (
          <ResourceCard 
            key={index}
            title={resource.title}
            description={resource.description}
            link={resource.link}
          />
        ))}
      </div>
    </div>
  );
}

export default FrontEnd;
