import React from 'react';
import Waqas from './Picture/Waqas.jpg';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons from react-icons
import ReactLogo from './Picture/ReactLogo.svg';
import JSLogo from './Picture/JSLogo.svg';
import TailwindLogo from './Picture/TailwindLogo.svg';
import HTMLLogo from './Picture/HTMLLogo.svg';
// import CSSLogo from './logos/css-logo.svg';
//import SQLLogo from './Picture/SQLLogo.svg';
import Background1 from './Picture/Background1.jpg'; // Import the background image

const App = () => {
  return (
    
    <div className="flex flex-col md:flex-row h-screen bg-slate-900 ">
      {/* Background */}
      {/* <div
        className="absolute z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Background1})` }}
      ></div> */}
      {/* Left Half */}
      <div className="md:w-1/2 flex flex-col rounded-lg items-center mx-auto">
        <div className="mt-8 mb-4 h-1/8 w-1/2 p-2 text-white rounded-lg  flex items-center justify-center font-custom">
          <h1 className="text-9xl font-bold ">Waqas<br/><span className="ml-32">Jalali</span></h1>
        </div>
        <div className="mb-8 flex justify-center mx-auto my-4 w-2/3">
          <img
            src={Waqas}
            alt="Your Name"
            className="w-48 h-48 item-center rounded-full object-cover object-center shadow-md"
            style={{ objectPosition: '50% 5%' }}
          />
        </div>
        <div className="mb-8  flex  justify-center w-2/3 font-custom">
          <p className="text-4xl p-4 text-center  text-white" style={{ fontFamily: 'Open Sans' }}>
            Recent graduate from TMU eager to delve into diverse fields of software technology, driven by a passion for continuous learning.
          </p>
        </div>
        <div className="mt-8 flex items-center justify-center text-white">
            <span className="mr-4 text-3xl " style={{ fontFamily: 'Open Sans' }}>Tech Stack:</span>
            <img src={ReactLogo} alt="React Logo" className="h-8 mr-2" />
            <img src={JSLogo} alt="JavaScript Logo" className="h-8 mr-2" />
            <img src={TailwindLogo} alt="Tailwind Logo" className="h-8 mr-2" />
            <img src={HTMLLogo} alt="HTML Logo" className="h-8" />
          </div>
        {/* Social Media Links */}
        <div className="flex absolute bottom-0 left-0 m-8 space-x-12">
          <a href="https://github.com/WaqasJal?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-700">
            <FaLinkedin className="w-12 h-12" />
          </a>
          <a href="https://www.linkedin.com/in/waqas-jalali/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaGithub className="w-12 h-12" />
          </a>
        </div>
      </div>
      
      {/* Right Half */}
      <div className="md:w-1/2  p-8 flex flex-col justify-center items-center" style={{ fontFamily: 'Open Sans' }}>
        <h2 className="text-2xl font-bold mb-4 text-white">Projects</h2>
        <div className="max-w-xl text-white">
          {/* Individual Project Cards */}
          <div className="bg-gradient-to-r from-zinc-600 to-slate-900 shadow-md rounded-lg p-16 mb-4 transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Out of Office Media Website</h3>
            <p className="text-gray-900">Project description goes here.</p>
            {/* Add more details/buttons as needed */}
          </div>
          <div className="bg-blue-100 shadow-md rounded-lg p-16 mb-4 transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 ">Autonomous Line Following Drone</h3>
            <p className="text-gray-900">Project description goes here.</p>
            {/* Add more details/buttons as needed */}
          </div>
          <div className="bg-blue-100 shadow-md rounded-lg p-16 mb-4 transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 ">Hospital Management Webapp</h3>
            <p className="text-gray-900">Project description goes here.</p>
            {/* Add more details/buttons as needed */}
          </div>
          <div className="bg-blue-100 shadow-md rounded-lg p-16 mb-4 transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2 ">NBA Database Management System</h3>
            <p className="text-gray-900">Project description goes here.</p>
            {/* Add more details/buttons as needed */}
          </div>
        </div>
      </div>
      {/* <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${backdrop})`, }}></div> */}
    </div>
  );
};

export default App;
