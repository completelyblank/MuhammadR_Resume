import React from 'react';
import Typewriter from 'typewriter-effect';
import { useInView } from 'react-intersection-observer';
import './styles.css'; // Import your CSS file for additional styling

const projects = [
  { id: 1, title: 'Multedio', description: 'Operating Systems Project. Multithreaded improved version of Adobe Lightroom.', bg: 'multedio.png', link: 'https://github.com/completelyblank/Multedio' },
  { id: 2, title: 'Pixel Odyssey', description: 'Data Structures Project. 2D Pixel Exploration game using DS Concepts.', bg: 'pixel_odyssey.jpg', link: 'https://github.com/completelyblank/Pixel-Odyssey' },
  { id: 3, title: 'Vulner [Ongoing]', description: 'Cyber Security Project. Flask + Vanilla (JS + HTML + CSS) to showcase Cyber Security Concepts.', bg: 'vulner.png', link: 'https://github.com/completelyblank/Vulner' },
  { id: 4, title: 'Anime_MERN', description: 'Full Stack CRUD App. MERN Stack with a twist.', bg: 'anime_mern.png', link: 'https://github.com/completelyblank/Anime-MERN' },
  { id: 5, title: 'Axnos [Abandoned]', description: 'Flutter Game which had to be abandoned because of load on Flutter.', bg: 'axnos.jpg', link: 'https://github.com/completelyblank/Axnos' },
  { id: 6, title: 'Terra Incognita [Ongoing]', description: 'Pygame Simulation projects using ML Algorithms.', bg: 'terra_inc.png', link: 'https://github.com/completelyblank/Terra-Incognita' },
  { id: 7, title: 'Blank Weather', description: 'API Caller Project using Open Weather API.', bg: 'weather.png', link: 'https://github.com/completelyblank/Blank-Weather' },
];

const certifications = [
  { id: 1, title: 'Web Design Certification', description: 'freeCodeCamp Web Design.', bg: 'web_design.png', link: 'https://www.freecodecamp.org/fcc76c7dae4-cf43-4d34-a299-348d8dd71275' },
  { id: 2, title: 'Frontend Development Certification', description: 'freeCodeCamp Frontend Development.', bg: 'frontend_dev.png', link: 'https://www.freecodecamp.org/fcc76c7dae4-cf43-4d34-a299-348d8dd71275' },
  { id: 3, title: 'Legacy JavaScript Algorithms Certification', description: 'freeCodeCamp JavaScript Development.', bg: 'java_algo.png', link: 'https://www.freecodecamp.org/fcc76c7dae4-cf43-4d34-a299-348d8dd71275' },
  { id: 4, title: 'Data Visualization Certification', description: 'freeCodeCamp D3 Visualization.', bg: 'data_vis.png', link: 'https://www.freecodecamp.org/fcc76c7dae4-cf43-4d34-a299-348d8dd71275' },
];

const articles = [
  { id: 1, title: 'Understanding KNN', description: 'A Medium Article on a theoretical beginning to kNN.', bg: 'kNN.webp', link: 'https://medium.com/@muhammadrkhan272/understanding-knn-0e3d29de5586' },
  { id: 2, title: 'The WORLD & PAKISTAN: COVID EXAM POLICIES', description: 'An article I wrote for publication at Manzil Pakistan, in Jun 7, 2021.', bg: 'pak.jpg', link: 'https://medium.com/@muhammadrkhan272/the-world-pakistan-covid-exam-policies-0d5e5786d93f' },
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
    <div className="p-8 min-h-screen text-white">
      <header className="text-center mb-8">
        <h1 className={`text-8xl text-gray-500 font-bold floresta transition-opacity duration-1000 ${skillsInView ? 'opacity-100' : 'opacity-0'}`}>Resume</h1>
        <p className={`text-6xl text-gray-500 mt-4 floresta transition-opacity duration-1000 ${skillsInView ? 'opacity-100' : 'opacity-0'}`}>Muhammad Raza Khan</p>
        <img
          src="muhammad.jpg"
          alt="Muhammad Raza"
          className={`w-32 h-32 rounded-full mx-auto mt-4 border-4 border-gray-800 transition-opacity duration-1000 ${skillsInView ? 'opacity-100' : 'opacity-0'}`}
          style={{ filter: 'brightness(0.8)' }}
        />
        <div className={`text-gray-300 text-8x1 mt-4 transition-opacity duration-1000 ${skillsInView ? 'opacity-100' : 'opacity-0'}`}>
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

      <section ref={skillsRef} className={`mt-8 glassy-div flex transition-opacity duration-1000 ${skillsInView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="p-4 rounded-lg flex-1 flex items-center">
          <img src="skills.png" alt="Skills Icon" className="w-64 h-64 mr-4" />
          <div className="flex-1">
            <h2 className="text-6xl text-gray-400 section-header floresta text-right">Skills</h2>
            <ul className="list-disc list-inside mt-4 text-gray-500">
              <li>Web Dev (HTML + CSS + Vanilla JS)</li>
              <li>ML (Classification + Training Algorithms) [Beginner]</li>
              <li>Pixel Art</li>
              <li>Soundtrack Making</li>
              <li>Flask as Backend [Beginner]</li>
              <li>Web Scraping (Selenium + BeautifulSoup)</li>
              <li>Cyber Security Algorithms [Basics]</li>
              <li>Operating Systems + Data Structures</li>
              <li>MERN Stack</li>
              <li>Data Visualization (D3/Matplotlib)</li>
              <li>API Calls</li>
            </ul>
          </div>
        </div>
        <div ref={hobbiesRef} className={`p-4 rounded-lg flex-1 flex items-center transition-opacity duration-1000 ${hobbiesInView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex-1">
            <h2 className="text-6xl text-gray-400 section-header floresta">Hobbies</h2>
            <ul className="list-disc list-inside mt-4 text-gray-500">
              <li>Dream Analysis</li>
              <li>Creative Writing</li>
              <li>Gaming</li>
              <li>Pixel Art</li>
              <li>Composing Music</li>
              <li>Exploring Web Development</li>
              <li>ML Exploration</li>
            </ul>
          </div>
          <img src="hobbies.png" alt="Hobbies Icon" className="w-64 h-64 ml-4" />
        </div>
      </section>

      <section ref={projectsRef} className={`mt-8 glassy-div transition-opacity duration-1000 ${projectsInView ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-6xl text-gray-400 section-header floresta">Projects</h2>
        <div className="flex justify-between items-center">
        <button
  onClick={prevProject}
  className="text-gray-200 bg-gray-800 hover:bg-gray-600 hover:text-white text-2xl px-4 py-2 rounded-full shadow-lg transition-transform transform hover:scale-110"
>
  &lt;
</button>

          <div className="w-3/4 p-4 rounded-lg flex items-center">
            <img src={projects[currentProject].bg} alt={projects[currentProject].title} className="w-64 h-64 mr-4 transition-transform duration-500 transform hover:scale-105" />
            <div className="flex-1">
              <h3 className="text-3xl text-gray-400 section-header ">{projects[currentProject].title}</h3>
              <p className="mt-2 text-gray-500">{projects[currentProject].description}</p>
              <a href={projects[currentProject].link} target="_blank" rel="noopener noreferrer" className="block mt-2 text-gray-500 underline hover:text-gray-400">View Project</a>
            </div>
          </div>
          <button onClick={nextProject} className="text-gray-200 bg-gray-800 hover:bg-gray-600 hover:text-white text-2xl px-4 py-2 rounded-full shadow-lg transition-transform transform hover:scale-110">&gt;</button>
        </div>
      </section>

      <section ref={certificationsRef} className={`mt-8 glassy-div transition-opacity duration-1000 ${certificationsInView ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-6xl text-gray-400 section-header floresta">Certifications</h2>
        <div className="flex justify-between items-center">
          <button onClick={prevCertification} className="text-gray-200 bg-gray-800 hover:bg-gray-600 hover:text-white text-2xl px-4 py-2 rounded-full shadow-lg transition-transform transform hover:scale-110">&lt;</button>
          <div className="w-3/4 p-4 rounded-lg flex items-center">
            <img src={certifications[currentCertification].bg} alt={certifications[currentCertification].title} className="w-64 h-64 mr-4 transition-transform duration-500 transform hover:scale-105" />
            <div className="flex-1">
              <h3 className="text-3xl text-gray-400 section-header ">{certifications[currentCertification].title}</h3>
              <p className="mt-2 text-gray-500">{certifications[currentCertification].description}</p>
              <a href={certifications[currentCertification].link} target="_blank" rel="noopener noreferrer" className="block mt-2 text-gray-500 underline hover:text-gray-400">View Certification</a>
            </div>
          </div>
          <button onClick={nextCertification} className="text-gray-200 bg-gray-800 hover:bg-gray-600 hover:text-white text-2xl px-4 py-2 rounded-full shadow-lg transition-transform transform hover:scale-110">&gt;</button>
        </div>
      </section>

      <section ref={articlesRef} className={`mt-8 glassy-div transition-opacity duration-1000 ${articlesInView ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-6xl text-gray-400 section-header floresta">Articles</h2>
        <div className="flex justify-between items-center">
          <button onClick={prevArticle} className="text-gray-200 bg-gray-800 hover:bg-gray-600 hover:text-white text-2xl px-4 py-2 rounded-full shadow-lg transition-transform transform hover:scale-110">&lt;</button>
          <div className="w-3/4 p-4 rounded-lg flex items-center">
            <img src={articles[currentArticle].bg} alt={articles[currentArticle].title} className="w-64 h-64 mr-4 transition-transform duration-500 transform hover:scale-105" />
            <div className="flex-1">
              <h3 className="text-3xl text-gray-400 section-header">{articles[currentArticle].title}</h3>
              <p className="mt-2 text-gray-500">{articles[currentArticle].description}</p>
              <a href={articles[currentArticle].link} target="_blank" rel="noopener noreferrer" className="block mt-2 text-gray-500 underline hover:text-gray-400">View Article</a>
            </div>
          </div>
          <button onClick={nextArticle} className="text-gray-200 bg-gray-800 hover:bg-gray-600 hover:text-white text-2xl px-4 py-2 rounded-full shadow-lg transition-transform transform hover:scale-110">&gt;</button>
        </div>
      </section>
    </div>
  );
};

export default Resume;
