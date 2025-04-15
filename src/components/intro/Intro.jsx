import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/eu25.jpeg';
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
          <p>Me chamo Tiago, formado em Análise e desenvolvimento de sistemas e sou
          Desenvolvedor backend com sólida experiência em Python, especializado em
          automação de processos, desenvolvimento de APIs RESTful e integração com LLMs
          (OpenAI, Hugging Face). Atuação em setores como contabilidade, petróleo e política.
          Experiência com FastAPI, Flask, Docker, PostgreSQL, AWS (EC2, RDS, S3, CloudWatch)
          e Git. Conhecimento prático em testes automatizados, SCRUM, e boas práticas de
          código. Atualmente, aprofundando conhecimentos em IA aplicada, Data Science e
          agentes inteligentes com foco em LangChain, CrewAI e arquitetura RAG,
          desenvolvendo aplicações que conectam LLMs a dados externos com fluxos em
          Python.

          </p>
          <a href="#contact" className="btn btn-primary">Contate-me</a>
        </div>
      </div>
    </section>
  )
}

export default Intro