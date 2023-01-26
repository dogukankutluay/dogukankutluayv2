import React, { useState, useEffect } from 'react';
import styles from '../../styles/Projects.module.scss';
import { ButtonWr } from '..';
import {
  RightArrowIcon,
  SliderArrowLeft,
  SliderArrowRight,
} from '../../assets/icons';
// import { Carousel } from '@trendyol-js/react-carousel';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
const projectsData = [
  {
    name: 'WORLDE NO TIME',
    date: 'NOVEMBER 5, 2021',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat a officiis omnis laudantium totam consequuntur',
    codes: ['React', 'Redux'],
    href: 'https://github.com/dogukankutluay/WordleNoTime',
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
export function useWindowSize() {
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
  const [swipe, setSwipe] = useState(0);
  const onChange = value => {
    setSwipe(value);
  };
  const DESKTOP = {
    styleLeft: swipe === 0 ? { opacity: '0.4' } : {},
    styleRight: swipe === 1 ? { opacity: '0.4' } : {},
    disabledLeft: swipe === 0 ? true : false,
    disabledRight: swipe === 1 ? true : false,
  };
  const MOBILE = {
    styleLeft: swipe === 0 ? { opacity: '0.4' } : {},
    styleRight: swipe === projectsData.length - 1 ? { opacity: '0.4' } : {},
    disabledLeft: swipe === 0 ? true : false,
    disabledRight: swipe === projectsData.length - 1 ? true : false,
  };
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectsHeader}>
        <h1>PROJECTS</h1>

        <ButtonWr
          href="https://github.com/dogukankutluay"
          text="ALL MY WORKS"
        />
      </div>
      <div className={styles.projectsContent}>
        <Carousel
          itemWidth={size.width < 700 ? '' : '50%'}
          onChange={onChange}
          value={swipe}>
          {projectsData.map((item, index) => {
            return <ProjectItem key={index} item={item} />;
          })}
        </Carousel>
      </div>
      <div className={styles.sliderAction}>
        <button
          style={size.width < 700 ? MOBILE.styleLeft : DESKTOP.styleLeft}
          disabled={
            size.width < 700 ? MOBILE.disabledLeft : DESKTOP.disabledLeft
          }
          onClick={() => setSwipe(swipe - 1)}>
          <SliderArrowLeft />
        </button>
        <button
          style={size.width < 700 ? MOBILE.styleRight : DESKTOP.styleRight}
          disabled={
            size.width < 700 ? MOBILE.disabledRight : DESKTOP.disabledRight
          }
          onClick={() => setSwipe(swipe + 1)}>
          <SliderArrowRight />
        </button>
      </div>
    </section>
  );
}

export default Projects;
