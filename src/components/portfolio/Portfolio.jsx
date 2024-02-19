import React from 'react';
import IMG1 from '../../assets/ft1.png';
import IMG2 from '../../assets/ft2.png';
import IMG3 from '../../assets/shelter.png';
import IMG4 from '../../assets/print2.png';
import IMG5 from '../../assets/news.png';
import IMG6 from '../../assets/math.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Movies Test',
      img: IMG1,
      description:
        'Movies Test is a website created in React that allows the user to search by movie, filter by genre and see the details.',
      technologies: 'ReactJS | TMDB API | Firebase Google Authentication',
      link: 'https://movies-test-jkno.vercel.app/',
      github: 'https://github.com/TiagoOliverDev/Movies_Test',
    },
    {
      id: 2,
      title: 'Accounting web scraping',
      img: IMG4,
      description:
        'Web scraping done on the page https://www.contabeis.com.br/ to bring the latest accounting news of the moment.',
      technologies: 'Python >= 3.8.10 | Playwright | BeautifulSoup | Pandas',
      link: '#',
      github: 'https://github.com/TiagoOliverDev/Desafio-Web-Scraping',
    },
    {
      id: 3,
      title: 'Br Star',
      img: IMG2,
      description: 'In development..',
      technologies: 'React | Javascript',
      link: '#',
      github: 'https://github.com/TiagoOliverDev/BrStar_project',
    },
    {
      id: 4,
      title: 'Shelter',
      img: IMG3,
      description:
        'Fully responsive interactive website built based on Figma design',
      technologies: 'JavaScript | CSS',
      link: 'https://meri-mg.github.io/shelter/pages/main/index.html',
      github: 'https://github.com/Meri-MG/shelter',
    },
    {
      id: 5,
      title: 'World News',
      img: IMG5,
      description:
        'Fully responsive interactive website built based on Adobe XD design',
      technologies: 'JavaScript | CSS',
      link: 'https://meri-mg.github.io/Unilab-world-news/',
      github: 'https://github.com/Meri-MG/Unilab-world-news',
    },
    {
      id: 6,
      title: 'Math Resource',
      img: IMG6,
      description:
        'Real-world group project which is still in progress and will provide educational platform for future young developers',
      technologies: 'JavaScript | Scss | Python',
      link: 'https://lukinoo.github.io/math-resource/',
      github: 'https://github.com/lukinoo/math-resource',
    },
  ];

  return (
    <section id="portfolio">
      <h5>Alguns dos meus projetos</h5>
      <h2>Portfólio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
