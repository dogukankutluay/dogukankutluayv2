import React from 'react';
import styles from '../../styles/Skills.module.scss';
import {
  JavaScript,
  TypeScript,
  NodeJs,
  MongoDb,
  ReactJs,
  Sass,
  Git,
  Aws,
  Jira,
} from '../../assets/icons';
const skillsData = [
  {
    name: 'JavaScript',
    icon: <JavaScript />,
  },
  {
    name: 'TypeScript',
    icon: <TypeScript />,
  },
  {
    name: 'NodeJs',
    icon: <NodeJs />,
  },
  {
    name: 'MongoDb',
    icon: <MongoDb />,
  },
  {
    name: 'ReactJs',
    icon: <ReactJs />,
  },
  {
    name: 'Sass',
    icon: <Sass />,
  },
  {
    name: 'Git',
    icon: <Git />,
  },

  {
    name: 'Aws',
    icon: <Aws />,
  },
  {
    name: 'Jira & BitBucket',
    icon: <Jira />,
  },
];
const SkillItem = ({ item }) => {
  return (
    <div className={styles.skillItemWr}>
      <div className={styles.skillItem}>
        {item.icon}
        <h1>{item.name}</h1>
      </div>
    </div>
  );
};
function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.skillsHeader}>
        <h1>SKILLS</h1>
      </div>
      <div className={styles.skillsContent}>
        {skillsData.map((item, index) => {
          return <SkillItem key={index} item={item} />;
        })}
      </div>
    </section>
  );
}

export default Skills;
