import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/eueu.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Conheça</h5>
      <h2>Sobre mim</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiência</h5>
              <small>+4 anos</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projetos</h5>
              <small>+30 Projetos completos</small>
            </article>
          </div>
          <p>Me chamo Tiago, formado em Análise e desenvolvimento de sistemas com mais de 4 anos de experiência no ramo de desenvolvimento de software, segue abaixo um pouco das minhas experiências.
          <br/>
          <br/>
          Experiência com desenvolvimento backend utilizando Python (Flask, FastApi e Django)
          <br/>
          Experiência utilizando Python em projetos de análise de dados complexos para área de petróleo.
          <br/>
          Experiência com desenvolvimento de sistemas de contabilidade.
          <br/>
          Experiência desenvolvendo automações de processos RPA com Python (Selenium e Playwright)
          <br/>
          Experiência com container Docker.
          <br/>
          Experiência com desenvolvimento C# e Java.
          <br/>
          Experiência liderando refatoração e criação de sistemas construídos em React/Next. 
          <br/>
          Experiência com administração e criação de bancos de dados.
          <br/>
          Experiência com metodologias ágeis (SCRUM).
          <br/>
          Experiência com implementação de design partners.

          </p>
          <a href="#contact" className="btn btn-primary">Contate-me</a>
        </div>
      </div>
    </section>
  )
}

export default Intro