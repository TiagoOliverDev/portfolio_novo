import React from 'react';
import IMG1 from '../../assets/ft1.png';
import IMG2 from '../../assets/pontoPausa.png';
import IMG3 from '../../assets/ft3.png';
import IMG4 from '../../assets/print2.png';
import IMG5 from '../../assets/sistemaContabil.png';
import IMG6 from '../../assets/senac.png';
import IMG7 from '../../assets/login.png'
import IMG8 from '../../assets/odds.png'
import IMG9 from '../../assets/uvtcaptcha.png'
import IMG10 from '../../assets/resumoMensal.png'
import IMG11 from '../../assets/extratoMensal.png'
import IMG12 from '../../assets/reciboMensal.png'
import IMG13 from '../../assets/provisãoFerias.png'
import IMG14 from '../../assets/sangueSuga.png'

import './portfolio.css';

const Portfolio = () => {

  const frontendProjects = [
    {
      id: 1,
      title: 'Movies Test',
      img: IMG1,
      description:
        'Movies Test é um site criado em React que permite ao usuário pesquisar por filme, filtrar por gênero, ver os detalhes e outras funcionalidades. Ainda está em desenvolvimento...',
      technologies: 'ReactJS | TMDB API | Firebase Google Authentication',
      link: 'https://movies-test-jkno.vercel.app/',
      github: 'https://github.com/TiagoOliverDev/Movies_Test',
    },
    {
      id: 2,
      title: 'Robotic',
      img: IMG3,
      description:
        'Site de divulgação da minha ideia de empreendedorismo',
      technologies: 'JavaScript | CSS | PHP',
      link: 'https://robotic.adahost.site/',
      github: '#',
    },
    {
      id: 3,
      title: 'Senac Empregabilidade',
      img: IMG6,
      description:
        'Projeto criado no Senac RN aonde o intuito é levar vagas de emprego para alunos e ex alunos da instituição, projeto bem reconhecido e amplamente utilizado!',
      technologies: 'C# | .Net | JavaScript | Sql server',
      link: 'https://empregabilidade.rn.senac.br/home',
      github: '#',
    },
    {
      id: 4,
      title: 'Gestor de pontos',
      img: IMG2,
      description: 'Interface moderna criada para batedor de pontos com diversas funcionalidades como, autenticação JWT, cadastro de colaboradores, cadastro de administradores, opções de bater pontos de Entrada, pausas e saida, relatórios e dashboard de acompanhamento.',
      technologies: 'React | Javascript | Python | Flask | Sql',
      link: 'https://github.com/TiagoOliverDev/frontend_control_point',
      github: 'https://github.com/TiagoOliverDev/frontend_control_point',
    },
    {
      id: 5,
      title: 'Intranete contábil',
      img: IMG5,
      description:
        'Intranet desenvolvida para empresa de contabilidade aonde o foco dela é integrar diversas automações do ramo, além de outras funcionalidades.',
      technologies: 'Python | JavaScript | Flask | BootStrap | Postgresql',
      link: '#',
      github: '#',
    },


  ];

  const backendProjects = [
    {
      id: 1,
      title: 'Backend do Gestor de Pontos',
      img: IMG7,
      description:
        'Backend criado com Python, Flask e Postgresql, nele foi utilizado bastante funções abstratas e o padrão REPOSITORIES. Fui utilizado técnicas de BLUEPRINTS para separar e organizar os escopos de endpoints, tabém está configurado para rodar em modo produção e desenvolvimento. Esse backend tem as seguintes funcionalidades (Cadastro e login do tipo ADMIN ou COLABORADOR, validação JWT, batedor de pontos geral, relatórios geral ou individual de ponto, dashboard, entre outras funcionalidades).',
      technologies: 'Python | Flask | Postgresql | JWT',
      link: 'https://github.com/TiagoOliverDev/backend_pontos',
      github: 'https://github.com/TiagoOliverDev/backend_pontos',
    },
    {
      id: 2,
      title: 'Web scraping de notíciais contabéis',
      img: IMG4,
      description:
        'Web scraping realizado para trazer as últimas notícias do ramo de contabilidade de um dos principais e conceituados sites contábil, o https://www.contabeis.com.br',
      technologies: 'Python | Playwright | BeautifulSoup | Pandas',
      link: 'https://github.com/TiagoOliverDev/Desafio-Web-Scraping',
      github: 'https://github.com/TiagoOliverDev/Desafio-Web-Scraping',
    },
    {
      id: 3,
      title: 'Web scraping ODDS',
      img: IMG8,
      description: 'Web scraping realizado no intuito de trazer as últimas ODDS do NBA de um site de apostas americano, o https://veri.bet/odds-picks?filter=upcoming',
      technologies: 'Python | Selenium',
      link: 'https://github.com/TiagoOliverDev/Web-Scraping-Task',
      github: 'https://github.com/TiagoOliverDev/Web-Scraping-Task',
    },
    {
      id: 4,
      title: 'Automação UVT',
      img: IMG9,
      description:
        'Automação criada no site da UVT "https://uvt.set.rn.gov.br/#/home" aonde foi necessário criar uma IA para resolver o captcha de letras e logar no site governamental e poder realizar processos administrativos de algumas empresas. Resumidamente ele rodava no site realizando diversos processos administrativos e baixando relatórios, esses relatórios eram enviados no google driver e no servidor do cliente via SSH. Por segurança de dados o código não será exposto, apenas posso mostrar o funcionamento.',
      technologies: 'Python | Playwright | MySql',
      link: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'Automação "Resumo mensal de funcionários"',
      img: IMG10,
      description:
        'Automação criada no sistema desktop Dominio Web para gerar relatórios de funcionários ativos e demitidos de determinada empresa de forma dinâmica, no final ele joga o relatório no Gestta para validação. Por se tratar de dados sigilosos o código está privado.',
      technologies: 'Python | Pyautogui',
      link: '#',
      github: '#',
    },
    {
      id: 6,
      title: 'Automação "Extrato mensal"',
      img: IMG11,
      description:
        'Automação criada no sistema desktop Dominio Web para gerar relatórios de extrato mensal empresarial por filial, departamento, centro de custos ou todos de uma determinada competência.',
      technologies: 'Python | Pyautogui',
      link: '#',
      github: '#',
    },
    {
      id: 7,
      title: 'Automação "Recibo de pagamento"',
      img: IMG12,
      description:
        'Automação criada no sistema desktop Dominio Web para gerar relatórios de recibo de pagamentos geral de uma determinada empresa.',
      technologies: 'Python | Pyautogui',
      link: '#',
      github: '#',
    },
    {
      id: 8,
      title: 'Automação "Provisão de férias"',
      img: IMG13,
      description:
        'Automação criada no sistema desktop Dominio Web para gerar relatórios de provisão de férias de funcionários de uma determinada empresa.',
      technologies: 'Python | Pyautogui',
      link: '#',
      github: '#',
    },
    {
      id: 9,
      title: 'Automação "Sangue Suga"',
      img: IMG14,
      description:
        'Automação em desenvolvimento aonde o intuito dela é varrer vagas de empregos nos principais sites (catho, indeed, linkedin e etc...) e jogar em um grupo do telegram.',
      technologies: 'Python | Selenium',
      link: 'https://github.com/TiagoOliverDev/sangue_suga',
      github: 'https://github.com/TiagoOliverDev/sangue_suga',
    }
  ];


  return (
    <>
    
      <section id="portfolio-frontend">
        <h5>Alguns dos meus projetos...</h5>
        <h2>FRONT-END</h2>

        <div className="container portfolio__container">
          {frontendProjects.map((pro) => (
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

      <section id="portfolio-backend">
        <h2>BACK-END + AUTOMAÇÕES</h2>

        <div className="container portfolio__container">
          {backendProjects.map((pro) => (
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

      

    </>
  );
};

export default Portfolio;
