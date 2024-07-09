import React from 'react';
import dictionaryProjectImage from '../images/dictionary-project.jpg';
import ipAddressProjectImage from '../images/ip-address-tracker-project.jpeg';
import calculatorProjectImage from '../images/calculator-project.jpeg';
import clockProjectImage from '../images/clock-project.jpg';
import '../styles/Work.css';
import WorkCard from './WorkCard';

export default function Work() {

    const ipAddressProject = {
        projectTitle: 'Movies App',
        projectDescription: ' A dynamic ReactJS application that allows users to search for movies, view detailed information, posters, ratings, and user reviews, providing an interactive movie discovery experience.',
        projectImage: ipAddressProjectImage,
        projectImageAltText: 'Movies App',
        technologiesUsed: ['React', 'React Router Dom', 'Context API'],
        gitHubLink: 'https://github.com/AASTHA2020/Movies_React',
        liveURL: 'https://movies-react-pi.vercel.app/',
        style: {
            'backgroundColor': 'rgba(0, 198, 224, 0.616)',
            'borderColor': 'rgba(0, 198, 224, 0.316)'
        }
    };

   
    const dictionaryProject = {
        projectTitle: 'Amazon UI Clone',
        projectDescription: 'A responsive e-commerce interface built with React, featuring a search bar, product listings, detailed product pages, shopping cart, checkout, and user authentication for a seamless shopping experience.',
        projectImage: dictionaryProjectImage,
        projectImageAltText: 'Amazon Project',
        technologiesUsed: ['React', 'Local Storage', 'React Router Dom', 'Context API', 'Rest API'],
        gitHubLink: 'https://github.com/AASTHA2020/mctreact',
        liveURL: 'https://mctreact.vercel.app/',
        style: {
            'backgroundColor': 'rgba(195, 221, 231, 0.616)',
            'borderColor': 'rgba(195, 221, 231, 0.316)'
        }
    };

    const clockProject = {
        projectTitle: 'GeeksterPok',
        projectDescription: ' A fun and interactive application using Vanilla JS and the Pokemon API to display flipping cards featuring various Pokemon, providing an engaging way to explore different Pokemon characters.',
        projectImage: clockProjectImage,
        projectImageAltText: 'Movies Project',
        technologiesUsed: ['Javascript', 'HTML5', 'CSS3'],
        gitHubLink: 'https://github.com/AASTHA2020/GeeksterPok',
        liveURL: 'https://aastha2020.github.io/GeeksterPok/',
        style: {
            'backgroundColor': 'rgba(211, 195, 231, 0.616)',
            'borderColor': 'rgba(211, 195, 231, 0.316)'
        }
    };

    const calculatorProject = {
        projectTitle: 'Greeting Chrome Extension',
        projectDescription: 'A customized Chrome extension designed with JavaScript, HTML5, and CSS3 to enhance browsing experiences with personalized greeting features.',
        projectImage: calculatorProjectImage,
        projectImageAltText: 'Chrome extension Project',
        technologiesUsed: ['Javascript', 'HTML5', 'CSS3'],
        gitHubLink: 'https://github.com/AASTHA2020/Greetings_Extensions',
        liveURL: 'https://aastha2020.github.io/Greetings_Extensions/',
        style: {
            'backgroundColor': 'rgba(161, 230, 176, 0.616)',
            'borderColor': 'rgba(161, 230, 176, 0.316)',
        }
    };

  // Array of all projects.
  const projects = [dictionaryProject, ipAddressProject, clockProject, calculatorProject];

  return (
      <section id="work" className="work flex">
          <h2>Work showcase:</h2>
          <div className="myWork flex">
              {
                  projects.map((project) => <WorkCard key={project["projectTitle"]} projectDetails={project} />)
              }
          </div>
      </section>
  );
};