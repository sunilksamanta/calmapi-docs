import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use CLI',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        CalmAPI is designed in a way that you don't have to worry about project setup and structure.
          Available CLI commands for project setup and module generation.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        CalmAPI lets you setup a production ready modular NodeJS backend with built in
          CRUD operations and Module generation, so that you can focus on the business logic.
      </>
    ),
  },
  {
    title: 'Powered by Express',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize as per your need at any point. The complete code is available for customization.
          Its powered by the most trusted NodeJS framework Express.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
