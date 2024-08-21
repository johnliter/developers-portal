import React from 'react';
//eslint-disable-next-line
import { FaRobot } from 'react-icons/fa';
import ResourceCard from './ResourceCard';

function AI() {
  const resources = [
    {
      title: 'ChatGPT',
      description: 'A state-of-the-art language model developed by OpenAI.',
      link: 'https://chat.openai.com/',
    },
    {
      title: 'Gemini',
      description: 'An advanced AI platform by Google.',
      link: 'https://gemini.google.com/app',
    },
    {
      title: 'You.com',
      description: 'A powerful search engine with AI capabilities.',
      link: 'https://you.com/',
    },
    {
      title: 'Perplexity',
      description: 'An AI tool for generating human-like text.',
      link: 'https://perplexity.ai/',
    },
    {
      title: 'TensorFlow',
      description: 'An end-to-end open source machine learning platform.',
      link: 'https://www.tensorflow.org/',
    },
    {
      title: 'PyTorch',
      description: 'An open source machine learning library based on the Torch library.',
      link: 'https://pytorch.org/',
    },
    {
      title: 'Keras',
      description: 'An open-source software library that provides a Python interface for artificial neural networks.',
      link: 'https://keras.io/',
    },
    {
      title: 'Scikit-learn',
      description: 'A free software machine learning library for the Python programming language.',
      link: 'https://scikit-learn.org/',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">AI Resources</h2>
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

export default AI;
