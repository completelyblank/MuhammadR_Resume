import React from 'react';
import Typewriter from 'typewriter-effect';
import { useInView } from 'react-intersection-observer';
import './styles.css'; // Import your CSS file for additional styling

// Import images
import muhammad from './muhammad.jpg';
import skillsIcon from './skills.png';
import hobbiesIcon from './hobbies.png';
import multedio from './multedio.png';
import pixelOdyssey from './pixel_odyssey.jpg';
import vulner from './vulner.png';
import animeMern from './anime_mern.png';
import axnos from './axnos.jpg';
import terraInc from './terra_inc.png';
import weather from './weather.png';
import webDesign from './web_design.png';
import frontendDev from './frontend_dev.png';
import javaAlgo from './java_algo.png';
import dataVis from './data_vis.png';
import knn from './kNN.webp';
import pak from './pak.jpg';

const projects = [
  { id: 1, title: 'Multedio', description: 'Operating Systems Project. Multithreaded improved version of Adobe Lightroom.', bg: multedio, link: 'https://github.com/completelyblank/Multedio' },
  { id: 2, title: 'Pixel Odyssey', description: 'Data Structures Project. 2D Pixel Exploration game using DS Concepts.', bg: pixelOdyssey, link: 'https://github.com/completelyblank/Pixel-Odyssey' },
  { id: 3, title: 'Vulner [Ongoing]', description: 'Cyber Security Project. Flask + Vanilla (JS + HTML + CSS) to showcase Cyber Security Concepts.', bg: vulner, link: 'https://github.com/completelyblank/Vulner' },
  { id: 4, title: 'Anime_MERN', description: 'Full Stack CRUD App. MERN Stack with a twist.', bg: animeMern, link: 'https://github.com/completelyblank/Anime-MERN' },
  { id: 5, title: 'Axnos [Abandoned]', description: 'Flutter Game which had to be abandoned because of load on Flutter.', bg: axnos, link: 'https://github.com/completelyblank/Axnos' },
  { id: 6, title: 'Terra Incognita [Ongoing]', description: 'Pygame Simulation projects using ML Algorithms.', bg: terraInc, link: 'https://github.com/completelyblank/Terra-Incognita' },
  { id: 7, title: 'Blank Weather', description: 'API Caller Project using Open Weather API.', bg: weather, link: 'https://github.com/completelyblank/Blank-Weather' },
];

const certifications = [
  { id: 1, title: 'Web Design Certification', description: 'freeCodeCamp Web Design.', bg: webDesign, link: 'https://www.freecodecamp.org/fcc76c7dae4-cf43-4d34-a299-348d8dd71275' },
  { id: 2, title: 'Frontend Development Certification', description: 'freeCodeCamp Frontend Development.', bg: frontendDev, link: 'https://www.freecodecamp.org/fcc76c7dae4-cf43-4d34-a299-348d8dd71275' },
  { id: 3, title: 'Legacy JavaScript Algorithms Certification', description: 'freeCodeCamp JavaScript Development.', bg: javaAlgo, link: 'https://www.freecodecamp.org/fcc76c7dae4-cf43-4d34-a299-348d8dd71275' },
  { id: 4, title: 'Data Visualization Certification', description: 'freeCodeCamp D3 Visualization.', bg: dataVis, link: 'https://www.freecodecamp.org/fcc76c7dae4-cf43-4d34-a299-348d8dd71275' },
];

const articles = [
  { id: 1, title: 'Understanding KNN', description: 'A Medium Article on a theoretical beginning to kNN.', bg: knn, link: 'https://medium.com/@muhammadrkhan272/understanding-knn-0e3d29de5586' },
  { id: 2, title: 'The WORLD & PAKISTAN: COVID EXAM POLICIES', description: 'An article I wrote for publication at Manzil Pakistan, in Jun 7, 2021.', bg: pak, link: 'https://medium.com/@muhammadrkhan272/the-world-pakistan-covid-exam-policies-0d5e5786d93f' },
];

const Resume = () => {
  const [currentProject, setCurrentProject] = React.useState(0);
  const [currentCertification, setCurrentCertification] = React.useState(0);
  const [currentArticle, setCurrentArticle] = React.useState(0);

  const nextProject = () => setCurrentProject((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  const nextCertification = () => setCurrentCertification((prev) => (prev + 1) % certifications.length);
  const prevCertification = () => setCurrentCertification((prev) => (prev - 1 + certifications.length) % certifications.length);
  const nextArticle = () => setCurrentArticle((prev) => (prev + 1) % articles.length);
  const prevArticle = () => setCurrentArticle((prev) => (prev - 1 + articles.length) % articles.length);

  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: hobbiesRef, inView: hobbiesInView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: certificationsRef, inView: certificationsInView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: articlesRef, inView: articlesInView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div className="p-4 md:p-8 min-h-screen text-white">
      <header className="text-center mb-8">
        <h1 className={`text-4xl md:text-8xl text-gray-500 font-bold floresta transition-opacity duration-1000 ${skillsInView ? 'opacity-100' : 'opacity-0'}`}>Resume</h1>
        <p className={`text-2xl md:text-6xl text-gray-500 mt-4 floresta transition-opacity duration-1000 ${skillsInView ? 'opacity-100' : 'opacity-0'}`}>Muhammad Raza Khan</p>
        <img
          src={muhammad}
          alt="Muhammad Raza"
          className={`w-16 h-16 md:w-32 md:h-32 rounded-full mx-auto mt-4 border-4 border-gray-800 transition-opacity duration-1000 ${skillsInView ? 'opacity-100' : 'opacity-0'}`}
          style={{ filter: 'brightness(0.8)' }}
        />
        <div className={`text-gray-300 text-xl md:text-3xl mt-4 transition-opacity duration-1000 ${skillsInView ? 'opacity-100' : 'opacity-0'}`}>
          <Typewriter
            options={{
              strings: [
                'Junior@FAST NUCES',
                'ML + Cyber Security Learner',
                'Full Stack Explorer',
                'DSA Solver',
                'Creative Programmer',
                'Pixel + Glow Artist',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </header>

      <section ref={skillsRef} className={`mt-8 glassy-div flex flex-col md:flex-row transition-opacity duration-1000 ${skillsInView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="p-4 rounded-lg flex-1 flex items-center">
          <img src={skillsIcon} alt="Skills Icon" className="w-32 h-32 md:w-64 md:h-64 mr-4" />
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl text-gray-400 section-header floresta text-right">Skills</h2>
            <ul className="list-disc list-inside mt-4 text-gray-500">
              <li>Web Dev (HTML + CSS + Vanilla JS)</li>
              <li>ML (Classification + Training Algorithms) [Beginner]</li>
              <li>Cyber Security [Beginner]</li>
              <li>Full Stack (React + Express + MongoDB + NodeJS)</li>
              <li>Creative Coding (Pygame + P5.js)</li>
              <li>Programming (C++ + Python)</li>
            </ul>
          </div>
        </div>
      </section>

      <section ref={hobbiesRef} className={`mt-8 glassy-div flex flex-col md:flex-row transition-opacity duration-1000 ${hobbiesInView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="p-4 rounded-lg flex-1 flex items-center">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl text-gray-400 section-header floresta">Hobbies</h2>
            <ul className="list-disc list-inside mt-4 text-gray-500">
              <li>Writing</li>
              <li>Gaming</li>
              <li>Watching Movies + TV Series + Anime</li>
              <li>Doing Science</li>
              <li>History Buff</li>
            </ul>
          </div>
          <img src={hobbiesIcon} alt="Hobbies Icon" className="w-32 h-32 md:w-64 md:h-64 ml-4" />
        </div>
      </section>

      <section ref={projectsRef} className={`mt-8 glassy-div flex flex-col items-center transition-opacity duration-1000 ${projectsInView ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-4xl md:text-6xl text-gray-400 section-header floresta">Projects</h2>
        <div className="mt-4 flex items-center justify-center">
          <button onClick={prevProject} className="px-4 py-2 m-2 bg-gray-700 hover:bg-gray-600 text-white rounded">Previous</button>
          <div className="w-64 h-64 bg-cover bg-center rounded-lg border-4 border-gray-800" style={{ backgroundImage: `url(${projects[currentProject].bg})` }}>
            <div className="flex flex-col justify-center items-center h-full p-4 bg-black bg-opacity-50 rounded-lg">
              <h3 className="text-2xl text-gray-100 mb-2">{projects[currentProject].title}</h3>
              <p className="text-gray-400 mb-4">{projects[currentProject].description}</p>
              <a href={projects[currentProject].link} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Project</a>
            </div>
          </div>
          <button onClick={nextProject} className="px-4 py-2 m-2 bg-gray-700 hover:bg-gray-600 text-white rounded">Next</button>
        </div>
      </section>

      <section ref={certificationsRef} className={`mt-8 glassy-div flex flex-col items-center transition-opacity duration-1000 ${certificationsInView ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-4xl md:text-6xl text-gray-400 section-header floresta">Certifications</h2>
        <div className="mt-4 flex items-center justify-center">
          <button onClick={prevCertification} className="px-4 py-2 m-2 bg-gray-700 hover:bg-gray-600 text-white rounded">Previous</button>
          <div className="w-64 h-64 bg-cover bg-center rounded-lg border-4 border-gray-800" style={{ backgroundImage: `url(${certifications[currentCertification].bg})` }}>
            <div className="flex flex-col justify-center items-center h-full p-4 bg-black bg-opacity-50 rounded-lg">
              <h3 className="text-2xl text-gray-100 mb-2">{certifications[currentCertification].title}</h3>
              <p className="text-gray-400 mb-4">{certifications[currentCertification].description}</p>
              <a href={certifications[currentCertification].link} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Certification</a>
            </div>
          </div>
          <button onClick={nextCertification} className="px-4 py-2 m-2 bg-gray-700 hover:bg-gray-600 text-white rounded">Next</button>
        </div>
      </section>

      <section ref={articlesRef} className={`mt-8 glassy-div flex flex-col items-center transition-opacity duration-1000 ${articlesInView ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-4xl md:text-6xl text-gray-400 section-header floresta">Articles</h2>
        <div className="mt-4 flex items-center justify-center">
          <button onClick={prevArticle} className="px-4 py-2 m-2 bg-gray-700 hover:bg-gray-600 text-white rounded">Previous</button>
          <div className="w-64 h-64 bg-cover bg-center rounded-lg border-4 border-gray-800" style={{ backgroundImage: `url(${articles[currentArticle].bg})` }}>
            <div className="flex flex-col justify-center items-center h-full p-4 bg-black bg-opacity-50 rounded-lg">
              <h3 className="text-2xl text-gray-100 mb-2">{articles[currentArticle].title}</h3>
              <p className="text-gray-400 mb-4">{articles[currentArticle].description}</p>
              <a href={articles[currentArticle].link} target="_blank" rel="noopener noreferrer" className="text-blue-500">Read Article</a>
            </div>
          </div>
          <button onClick={nextArticle} className="px-4 py-2 m-2 bg-gray-700 hover:bg-gray-600 text-white rounded">Next</button>
        </div>
      </section>
    </div>
  );
};

export default Resume;
