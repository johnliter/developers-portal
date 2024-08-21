import React from 'react';

function ResourceCard({ title, description, link }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 m-4 max-w-sm w-full">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
          Visit
        </button>
      </a>
    </div>
  );
}

export default ResourceCard;
