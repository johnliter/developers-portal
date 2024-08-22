import React from 'react';
import { FaReact, FaServer, FaRobot, FaLinux, FaTools, FaMoneyBillAlt } from 'react-icons/fa';

function Home() {
  return (
    <div className="text-center w-full">
      <h2 className="text-2xl font-bold mb-4">Welcome to the Developer Resource Portal!</h2>
      <p className="text-lg mb-8">Select a tab to explore resources in different domains of development.</p>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row items-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full">
          <FaReact className="text-6xl text-blue-500 mb-4 sm:mb-0 sm:mr-8" />
          <div className="text-center sm:text-left w-full">
            <h3 className="text-2xl font-semibold mb-2 text-center">Front End</h3>
            <p>The front end is the part of the website users interact with. It includes everything users experience directly: text, images, sliders, buttons, etc. Popular tools and frameworks include React, Angular, Vue.js, and Svelte.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full">
          <FaServer className="text-6xl text-green-500 mb-4 sm:mb-0 sm:mr-8" />
          <div className="text-center sm:text-left w-full">
            <h3 className="text-2xl font-semibold mb-2 text-center">Back End</h3>
            <p>The back end is the server side of a website. It includes servers, databases, and applications. It manages user connections, database operations, and business logic. Popular tools and frameworks include Node.js, Python, PHP, and Ruby on Rails.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full">
          <FaRobot className="text-6xl text-red-500 mb-4 sm:mb-0 sm:mr-8" />
          <div className="text-center sm:text-left w-full">
            <h3 className="text-2xl font-semibold mb-2 text-center">AI</h3>
            <p>Artificial Intelligence (AI) focuses on creating intelligent machines that can perform tasks that typically require human intelligence. Key areas include machine learning, neural networks, and computer vision. Popular tools and frameworks include TensorFlow, PyTorch, and Keras.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full">
          <FaLinux className="text-6xl text-yellow-500 mb-4 sm:mb-0 sm:mr-8" />
          <div className="text-center sm:text-left w-full">
            <h3 className="text-2xl font-semibold mb-2 text-center">Linux</h3>
            <p>Linux is an open-source operating system kernel. It is the basis for many distributions and is widely used for servers, desktops, and embedded systems. Popular distributions include Ubuntu, Debian, Fedora, and Arch Linux.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full">
          <FaTools className="text-6xl text-purple-500 mb-4 sm:mb-0 sm:mr-8" />
          <div className="text-center sm:text-left w-full">
            <h3 className="text-2xl font-semibold mb-2 text-center">Learning Resources</h3>
            <p>A collection of tools and resources to help you with various development tasks.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full">
          <FaMoneyBillAlt className="text-6xl text-green-500 mb-4 sm:mb-0 sm:mr-8" />
          <div className="text-center sm:text-left w-full">
            <h3 className="text-2xl font-semibold mb-2 text-center">Payment Processing</h3>
            <p>Tools and resources for integrating and managing payment processing in your applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
