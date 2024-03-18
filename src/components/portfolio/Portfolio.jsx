import React from 'react';
import IMG1 from '../../assets/ft1.png';
import IMG2 from '../../assets/pontoPausa.png';
import IMG3 from '../../assets/ft3.png';
import IMG4 from '../../assets/print2.png';
import IMG5 from '../../assets/sistemaContabil.png';
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
      title: 'Gestor de pontos',
      img: IMG2,
      description: 'Employee points management system with dashboard and reports, with access levels for ADMIN and EMPLOYEE...',
      technologies: 'React | Javascript | Python | Flask | Sql',
      link: '#',
      github: 'https://github.com/TiagoOliverDev/frontend_control_point',
    },
    {
      id: 4,
      title: 'Intranete contábil',
      img: IMG5,
      description:
        'Intranet created for a company in the accounting sector where several process automations were created, the intranet also works with an automation/bot manager',
      technologies: 'Python | JavaScript | Flask | BootStrap | Postgresql',
      link: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'Robotic',
      img: IMG3,
      description:
        'Landing page to promote my project automation services.',
      technologies: 'JavaScript | CSS | PHP',
      link: 'https://robotic.adaupsoft.com/',
      github: '#',
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
