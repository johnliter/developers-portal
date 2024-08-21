import React from 'react';

function About() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
      <div className="flex flex-col sm:flex-row items-center">
        <img
          src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/116711819_10219771157963367_966579897380154611_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=lY-DcYLDMxYQ7kNvgGElHSt&_nc_ht=scontent-dfw5-2.xx&oh=00_AYA8ANdh0JoGgx1fMrN2D_XPRd3ou_KsgAQySwZ0ZjDzzw&oe=66E9BA4B"
          alt="Profile"
          className="w-64 h-64 rounded-full mb-8 sm:mb-0 sm:mr-12"
        />
        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center sm:text-left">
          Hello! I'm John Liter, a passionate developer with experience in various domains of software development. I enjoy working on challenging projects and learning new technologies. Connect with me on my social profiles below!
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center mt-12 space-y-4 sm:space-y-0 sm:space-x-6">
        <a href="https://github.com/johnliter" target="_blank" rel="noopener noreferrer">
          <button className="bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 text-xl">
            GitHub
          </button>
        </a>
        <a href="https://www.facebook.com/te03civiclx/" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-500 text-xl">
            Facebook
          </button>
        </a>
        <a href="https://twitter.com/te03civiclx1" target="_blank" rel="noopener noreferrer">
          <button className="bg-black text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 text-xl">
            X
          </button>
        </a>
      </div>
    </div>
  );
}

export default About;
