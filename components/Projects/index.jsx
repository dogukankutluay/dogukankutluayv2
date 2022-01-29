import React, { useState, useEffect } from 'react';
import styles from '../../styles/Projects.module.scss';
import { ButtonWr } from '..';
import { RightArrowIcon } from '../../assets/icons';
import { Carousel } from '@trendyol-js/react-carousel';
const projectsData = [
  {
    name: 'SOCKET TEMPLATE NODE',
    date: 'NOVEMBER 5, 2021',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat a officiis omnis laudantium totam consequuntur',
    codes: ['JavaScript', 'Express', 'Socket'],
    href: 'https://github.com/dogukankutluay/socket-template-node',
  },
  {
    name: 'SOCKET TEMPLATE REACT',
    date: 'APRIL 10, 2021',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat a officiis omnis laudantium totam consequuntur',
    codes: ['JavaScript', 'Sass', 'React'],
    href: 'https://github.com/dogukankutluay/socket-template-react',
  },
  {
    name: 'GRAPHQL REACT ARCHITECTURAL',
    date: 'NOVEMBER 7, 2021',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat a officiis omnis laudantium totam consequuntur',
    codes: ['JavaScript', 'Graphql', 'React'],
    href: 'https://github.com/dogukankutluay/graphql-react-architectural-',
  },
  {
    name: 'GRAPHQL EXPRESS ARCHITECTURAL',
    date: 'NOVEMBER 10, 2021',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat a officiis omnis laudantium totam consequuntur',
    codes: ['JavaScript', 'Express', 'Graphql'],
    href: 'https://github.com/dogukankutluay/graphql-express-architectural',
  },
];
const ProjectItem = ({ item }) => {
  return (
    <div className={styles.projectItem}>
      <h1>{item.name}</h1>
      <span>{item.date}</span>
      {/* <p>{item.desc}</p> */}
      <div className={styles.codes}>
        {item.codes.map((code, i) => {
          return (
            <div key={i}>
              <span>#</span>
              {code}
            </div>
          );
        })}
      </div>
      <a href={item.href} target="_blank" rel="noreferrer">
        <RightArrowIcon />
      </a>
    </div>
  );
};
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
function Projects() {
  const size = useWindowSize();
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectsHeader}>
        <h1>PROJECTS</h1>
        {/* <ul className={styles.tabs}>
          <li className={styles.activeLi}>JAVASCRİPT</li>
          <li>SASS</li>
          <li>TYPESCRIPT</li>
        </ul> */}
        <ButtonWr
          href="https://github.com/dogukankutluay"
          text="ALL MY WORKS"
        />
      </div>
      <div className={styles.projectsContent}>
        <Carousel show={size.width < 700 ? 1 : 2.5} slide={1} swiping={true}>
          {projectsData.map((item, index) => {
            return <ProjectItem key={index} item={item} />;
          })}
        </Carousel>
      </div>
    </section>
  );
}

export default Projects;
