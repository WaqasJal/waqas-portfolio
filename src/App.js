import React from 'react';
import Waqas from './Picture/Waqas.jpg';
import './index.css';
import './App.css';
//import backdrop from './Picture/backdrop.jpeg'
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons from react-icons

const App = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-b from-gray-200 to-gray-400">

      
      {/* Left Half */}
      <div className="border-4 border-blue-200 md:w-1/2 bg-gray-300 flex flex-col rounded-lg shadow-lg">
        <div className="border-4 border-red-500 ml-16 mt-8 mb-8 h-1/8 w-1/2 p-2 text-black rounded-lg shadow-md">
          <h1 className="text-9xl font-bold">Waqas<br /><span className="ml-32">Jalali</span></h1>
        </div>
        <div className="mb-8 flex justify-center w-2/3">
          <img
            src={Waqas}
            alt="Your Name"
            className="w-48 h-48 item-center rounded-full border-4 border-red-500 object-cover object-center shadow-md"
            style={{ objectPosition: '50% 5%' }}
          />
        </div>
        <div className="border-4 border-red-500 mb-8 ml-16 flex justify-center w-1/2">
          <p className="text-lg text-center text-gray-800">Recent graduate from TMU eager to delve into diverse fields of software technology, driven by a passion for continuous learning.</p>
        </div>
        {/* Social Media Links */}
        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
            <FaGithub className="w-8 h-8" />
          </a>
        </div>
      </div>

      {/* Right Half */}
      <div className="md:w-1/2 bg-gray-400 p-8 flex flex-col justify-center items-center rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-black">Projects</h2>
        <div className="max-w-lg">
          {/* Individual Project Cards */}
          <div className="bg-blue-100 shadow-md rounded-lg p-8 mb-4 transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-black">Out of Office Media Website</h3>
            <p className="text-gray-800">Project description goes here.</p>
            {/* Add more details/buttons as needed */}
          </div>
          <div className="bg-blue-100 shadow-md rounded-lg p-8 mb-4 transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-black">Autonomous Line Following Drone</h3>
            <p className="text-gray-800">Project description goes here.</p>
            {/* Add more details/buttons as needed */}
          </div>
          <div className="bg-blue-100 shadow-md rounded-lg p-8 mb-4 transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-black">Hospital Management Webapp</h3>
            <p className="text-gray-800">Project description goes here.</p>
            {/* Add more details/buttons as needed */}
          </div>
          <div className="bg-blue-100 shadow-md rounded-lg p-8 mb-4 transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 text-black">NBA Database Management System</h3>
            <p className="text-gray-800">Project description goes here.</p>
            {/* Add more details/buttons as needed */}
          </div>
        </div>
      </div>
      {/* <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${backdrop})`, }}></div> */}
    </div>
  );
};

export default App;
