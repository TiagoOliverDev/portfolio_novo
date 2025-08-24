import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, GraduationCap, BookOpen, Award, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import minhaFoto from '@/assets/eueu1111.png';

const Index = () => {
const projects = {
  'Engenharia de Dados': [
    {
      title: '📞 Pipeline ETL - Índice de Desempenho no Atendimento (IDA)',
      description: 'Pipeline ETL para extração, transformação e carga dos dados do Índice de Desempenho no Atendimento (IDA) das operadoras de telecomunicações, garantindo normalização, integração e persistência em Data Mart.',
      technologies: ['Python', 'Pandas', 'Apache Airflow', 'PostgreSQL', 'ETL', 'Doekcer', 'Modelo Estrela'],
      status: 'Concluído'
    },
    {
      title: '⛽ Pipeline de Dados de Revendedores de Combustíveis (ANP)',
      description: 'Pipeline em desenvolvimento que consome a API oficial da ANP para captura de dados de revendedores de combustíveis, realizando tratamento, armazenamento em banco de dados e disponibilização para análise via dashboards.',
      technologies: ['Python', 'Pandas', 'PostgreSQL', 'ETL', 'APIs'],
      status: 'Em desenvolvimento'
    },
    {
      title: '📡 Pipeline de Streaming de Voos em Tempo Real',
      description: 'Pipeline completo para captura, processamento e armazenamento de dados de voos em tempo real, utilizando Apache Kafka, Spark Structured Streaming, Airflow, Python e Docker.',
      technologies: ['Python', 'Apache Kafka', 'Spark Structured Streaming', 'Apache Airflow', 'Docker'],
      status: 'Concluído'
    },
    {
      title: '🌦️ Pipeline de Dados Meteorológicos',
      description: 'Pipeline ETL para captura e armazenamento de dados climáticos de Natal-RN, com processamento orquestrado via Apache Airflow e Docker.',
      technologies: ['Python', 'Apache Airflow', 'Docker', 'ETL'],
      status: 'Concluído'
    },
    {
      title: '🗳️ Pipeline de Dados das Eleições 2024',
      description: 'Captura e processamento de milhões de registros públicos eleitorais usando PySpark, Airflow e PostgreSQL, com visualização em tempo real.',
      technologies: ['Python', 'PySpark', 'Apache Airflow', 'PostgreSQL'],
      status: 'Concluído'
    },
    {
      title: '🧩 HelpSup - Integração com dados do TSE',
      description: 'Sistema web para importar, tratar e deduplicar dados de órgãos partidários do TSE, com uso interno pela equipe.',
      technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
      status: 'Concluído'
    }
  ],
  'IA / LLMs': [
    {
    title: '🤖 Assistente Conversacional Institucional - API, OpenAI + Python',
    description: 'Projeto modular que utiliza a OpenAI API para criar um assistente conversacional em português, respeitando uma base de conhecimento institucional. O assistente gera respostas em diferentes modos (default, curta, explicativa, formal), limita-se à base de conhecimento institucional, mantém histórico de interações em SQLite e registra logs detalhados de prompts, tokens e tempos de resposta.',
    technologies: ['Python', 'OpenAI', 'SQLite', 'FastApi', 'Pydantic'],
    status: 'Concluído'
    },
    {
      title: '📊 Log Assistant com IA (LangChain + RAG)',
      description: 'Assistente inteligente para análise de arquivos `.log` e `.txt`. Use linguagem natural para obter respostas contextuais via IA generativa com RAG e LangChain.',
      technologies: ['Python', 'LangChain', 'OpenAI', 'RAG', 'Streamlit'],
      status: 'Concluído'
    },
    {
      title: '🤖 Integrações com LLMs (LangChain, CrewAI)',
      description: 'Desenvolvimento de agentes inteligentes orquestrando fluxos complexos com RAG, APIs externas e LLMs.',
      technologies: ['Python', 'LangChain', 'CrewAI', 'OpenAI'],
      status: 'Em andamento'
    },
    {
    title: '📄 Analisador Inteligente de Currículos',
    description: 'Aplicação com LLMs que interpreta currículos, extrai habilidades e experiências com base em critérios técnicos, utilizando IA generativa para triagem automatizada.',
    technologies: ['Python', 'LangChain', 'OpenAI', 'CrewAI'],
    status: 'Em andamento'
    },
    {
      title: '🧠 IA para Quebra de Captchas',
      description: 'Modelo de deep learning com Keras para resolver captchas em sites governamentais.',
      technologies: ['Python', 'Keras', 'TensorFlow'],
      status: 'Concluído'
    }
  ],
  'Automações RPA': [
    {
      title: '🏛️ Bot de Criação de Órgãos Partidários',
      description: 'Automação crítica que integra dados do TSE, bancos e AWS para registro e atualização de órgãos partidários.',
      technologies: ['Python', 'Selenium', 'AWS', 'PostgreSQL'],
      status: 'Concluído'
    },
    {
      title: '📈 Bots Contábeis - Relatórios e RH',
      description: 'Robôs que automatizam geração de relatórios, admissões/demissões, provisão de férias e mais, com envio por SSH e Google Drive.',
      technologies: ['Python', 'PyAutoGUI', 'Selenium', 'SSH'],
      status: 'Concluído'
    }
  ],
  'Backend': [
    {
    title: '📡 API para Orquestração de Pipelines e Bots',
    description: 'API desenvolvida em FastAPI e Pydantic que monitora uma fila SQS (AWS) para receber solicitações de execução de pipelines e bots, gerenciando sua orquestração em uma infraestrutura local.',
    technologies: ['Python', 'FastAPI', 'Pydantic', 'AWS SQS', 'Docker'],
    status: 'Concluído'
    },
    {
      title: '🖥️ Intranet Contábil - Central de Robôs',
      description: 'Sistema web interno para gestão e acionamento de automações RPA por múltiplos usuários.',
      technologies: ['Python', 'Flask', 'Bootstrap', 'PostgreSQL'],
      status: 'Concluído'
    },
    {
      title: '🔌 APIs REST para Integrações e Robôs',
      description: 'APIs para integração de automações com servidores, arquivos e orquestração interna.',
      technologies: ['Python', 'FastAPI', 'SSH'],
      status: 'Concluído'
    }
  ]
};

  const education = [
    {
      degree: 'Análise e Desenvolvimento de Sistemas',
      institution: 'Universidade Potiguar (UNP)',
      period: '2019 - 2022',
      status: 'Concluído',
      description: 'Formação abrangente em algoritmos, estruturas de dados, programação e sistemas, com foco em desenvolvimento backend, bancos de dados relacionais e não relacionais, metodologias ágeis (Scrum, Kanban), padrões de projeto e gestão de projetos. Experiência prática em integração de sistemas, boas práticas de engenharia de software e aplicação de conceitos modernos de arquitetura de software.'
    },
    // {
    //   degree: 'Engenharia de Dados com Inteligência Artificial',
    //   institution: 'Asimov Academy',
    //   period: '2025 - Atual',
    //   status: 'Em andamento',
    //   description: 'Curso avançado integrando técnicas de IA com engenharia de dados moderna.'
    // }
  ];

const certifications = [
  'Desenvolvimento de agentes inteligentes com IA – Asimov Academy (em andamento)',
  'Engenharia de Dados – Asimov Academy',
  'Pythonista Autodidata – Dev Aprender',
  'Curso Full Stack e Banco de Dados – Danki Code',
  'Lógica de Programação e Java – JDev Treinamentos',
  'Spring Boot – JDev Treinamentos',
  'Fundamentos de Metodologias Ágeis – Scrum Foundation'
];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const phoneNumber = '5584992242471'; // Substitua pelo seu número
    const message = 'Olá! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-navy-dark text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-navy-dark/95 backdrop-blur-sm z-50 border-b border-navy-light">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold gradient-text">Meu Portfólio</h1>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('inicio')} className="hover:text-gold transition-colors">Início</button>
              <button onClick={() => scrollToSection('sobre')} className="hover:text-gold transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('formacao')} className="hover:text-gold transition-colors">Formação</button>
              <button onClick={() => scrollToSection('projetos')} className="hover:text-gold transition-colors">Projetos</button>
              <button onClick={() => scrollToSection('contato')} className="hover:text-gold transition-colors">Contato</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="section-padding min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Olá, eu sou o 
                <span className="block gradient-text">Tiago Oliveira</span>
              </h2>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                  Especialista em Python Backend com foco em Engenharia de Dados e Inteligência Artificial.
                  Atuo no desenvolvimento de APIs, automações RPA e soluções escaláveis com Python. Estou em formação contínua como Engenheiro de Dados, trabalhando com pipelines ETL/ELT, DBT, AWS Glue, Apache Airflow e integração de LLMs (LangChain, Agno, CrewAI) para construir aplicações inteligentes e automatizadas de ponta a ponta.
              </p>
              <div className="flex gap-4">
                <Button onClick={() => scrollToSection('projetos')} className="bg-gold hover:bg-gold-light text-navy-dark font-semibold">
                  Ver Projetos
                </Button>
                <Button onClick={() => scrollToSection('contato')} variant="outline" className="border-gold text-gold hover:bg-gold hover:text-navy-dark">
                  Entrar em Contato
                </Button>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-gold to-gold-light p-1">
                  <div className="w-full h-full rounded-full bg-navy-dark flex items-center justify-center">
                    <img 
                      src={minhaFoto} 
                      alt="Foto de perfil"
                      className="w-72 h-72 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="section-padding bg-navy-light">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Sobre Mim</h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                Analista desenvolvedor com sólida experiência em Python, especializado em automação 
                de processos (RPA), desenvolvimento de APIs RESTful e integração com LLMs (OpenAI, 
                Hugging Face). Atuação nos setores de contabilidade, petróleo e política, com 
                experiência prática em FastAPI, Flask, Docker, PostgreSQL, AWS (EC2, ECS, RDS, S3, 
                CloudWatch, GLUE), CI/CD e Git. Forte conhecimento em testes automatizados, metodologias ágeis 
                (Scrum) e boas práticas de desenvolvimento. 
              </p>
              <p className="text-lg mb-8 text-gray-300 leading-relaxed">
                Atualmente, estou aprofundando conhecimentos em Engenharia de Dados, com foco 
                em pipelines de dados, ETL/ELT, Apache Airflow, DBT, PySpark e arquitetura escalável de dados. 
                Também venho explorando agentes inteligentes com IA, utilizando LangChain, CrewAI, Agno
                e RAG (Retrieval-Augmented Generation) para integrar LLMs a dados externos e 
                orquestrar fluxos inteligentes em Python. 
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">30+</div>
                  <div className="text-gray-300">Projetos Concluídos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <div className="text-gray-300">Anos de Experiência</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {[
                // Engenharia de Dados (primeiro)
                'AWS Glue', 'DBT', 'Airflow', 'PySpark', 'Pandas', 'PostgreSQL',
                'ETL/ELT Pipelines', 'Data Lake', 'Data Warehousing',  'SQL',
                // Backend e APIs
                'Python', 'FastAPI', 'Flask', 'Docker', 'AWS', 'Linux', 'Git',
                // IA e Agentes
                'LangChain', 'CrewAI', 'Agno', 'Keras',
                // RPA e Automação
                'Selenium', 'BotCity', 'Playwright', 'PyAutoGUI', 'Automação RPA',
                // Frontend (secundário)
                'React.js', 'Streamlit'
                ].map((skill) => (
                <div key={skill} className="bg-navy-dark p-4 rounded-lg text-center border border-gold/20 hover:border-gold/50 transition-colors hover:scale-105 duration-300">
                  <span className="font-semibold text-gold">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="formacao" className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Formação & Especialização</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">Minha jornada acadêmica e profissional</p>
          </div>

          {/* Academic Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-gold flex items-center">
              <GraduationCap className="mr-3 h-6 w-6" />
              <span className="mr-3">Formação Acadêmica</span>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-gold to-transparent"></div>
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-navy-light border-navy-light hover:border-gold/50 transition-all duration-300 animate-fade-in hover:scale-[1.02]">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-white text-xl">{edu.degree}</CardTitle>
                      <Badge variant={edu.status === 'Concluído' ? 'default' : 'secondary'} 
                             className={edu.status === 'Concluído' ? 'bg-gold text-navy-dark' : 'bg-blue-600 text-white animate-pulse'}>
                        {edu.status}
                      </Badge>
                    </div>
                    <div className="flex items-center text-gold mb-2">
                      <BookOpen className="h-4 w-4 mr-2" />
                      <span className="font-semibold">{edu.institution}</span>
                    </div>
                    <div className="text-gray-400 text-sm mb-3">{edu.period}</div>
                    <CardDescription className="text-gray-300">
                      {edu.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Current Studies Highlight */}
          <div className="mb-16">
            <Card className="bg-gradient-to-br from-navy-light to-navy-dark border-2 border-gold/50 animate-fade-in">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <Brain className="h-6 w-6 text-navy-dark" />
                  </div>
                <div>
                  <CardTitle className="text-gold text-xl">Estudos Atuais em Destaque</CardTitle>
                  <CardDescription className="text-gray-300">Engenharia de Dados e Desenvolvimento de Agentes de IA</CardDescription>
                </div>
                </div>
                <div className="bg-navy-dark p-4 rounded-lg border border-gold/20">
                  <p className="text-gray-300 leading-relaxed">
                    Atualmente aprofundando minha formação em duas trilhas estratégicas:
                    <br /><br />
                    <span className="text-gold font-semibold">🔹 Trilha de Engenharia de Dados – Escola EIA (586h):</span> 
                    Formação completa cobrindo fundamentos e práticas avançadas em pipelines ETL/ELT, Data Lake e Data Warehouse, 
                    processamento distribuído com PySpark, modelagem de dados, DBT, Pandas, SQL avançado e 
                    arquiteturas em múltiplas nuvens (AWS, GCP e Azure). Inclui também tópicos de MLOps, 
                    orquestração e integração com infraestruturas escaláveis.
                    <br /><br />
                    <span className="text-gold font-semibold">🔹 Desenvolvimento de Agentes de IA – Asimov Academy:</span> 
                    Curso especializado em criação de agentes inteligentes utilizando LangChain, CrewAI e Agno, 
                    com foco em RAG (Retrieval Augmented Generation), automações inteligentes e integração de 
                    LLMs em aplicações backend e pipelines de dados.
                    <br /><br />
                    Essa combinação me permite unir o domínio de engenharia de dados com aplicações práticas 
                    de IA, desenvolvendo soluções ponta a ponta que integram dados, automação e inteligência artificial.
                  </p>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gold flex items-center">
              <Award className="mr-3 h-6 w-6" />
              <span className="mr-3">Certificações</span>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-gold to-transparent"></div>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-navy-light p-4 rounded-lg border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:scale-105 animate-fade-in">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gold rounded-full mr-3"></div>
                    <span className="text-gray-300 font-medium">{cert}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="section-padding bg-navy-light">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Meus Projetos</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">Explore alguns dos meus trabalhos organizados por área de especialização</p>
          </div>

          {Object.entries(projects).map(([category, categoryProjects], categoryIndex) => (
            <div key={category} className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-gold flex items-center">
                <span className="mr-3">{category}</span>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-gold to-transparent"></div>
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {categoryProjects.map((project, index) => (
                  <Card key={index} className="bg-navy-dark border-navy-dark hover:border-gold/50 transition-all duration-300 animate-fade-in hover:scale-[1.02] hover:shadow-lg hover:shadow-gold/20">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-white">{project.title}</CardTitle>
                        <Badge variant={project.status === 'Concluído' ? 'default' : 'secondary'} 
                               className={project.status === 'Concluído' ? 'bg-gold text-navy-dark' : 'bg-navy-light text-gold'}>
                          {project.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="border-gold/30 text-gold hover:bg-gold hover:text-navy-dark transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Entre em Contato</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">Vamos conversar sobre seu próximo projeto</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-6 text-gold">Vamos trabalhar juntos!</h3>
              <p className="text-lg mb-8 text-gray-300 leading-relaxed">
                Estou sempre aberto a discutir novas oportunidades, projetos interessantes ou 
                simplesmente trocar ideias sobre tecnologia. Entre em contato comigo!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-navy-dark" />
                  </div>
                  <div>
                    <p className="font-semibold text-gold">Email</p>
                    <p className="text-gray-300">paulotiago138@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-navy-dark" />
                  </div>
                  <div>
                    <p className="font-semibold text-gold">Telefone (Whats)</p>
                    <p className="text-gray-300">+55 (84) 99224-2471</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-navy-dark" />
                  </div>
                  <div>
                    <p className="font-semibold text-gold">Localização</p>
                    <p className="text-gray-300">Natal/RN, Brasil</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <Button onClick={openWhatsApp} className="bg-green-600 hover:bg-green-700 text-white flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </Button>
                <a
                  href="https://github.com/TiagoOliverDev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold hover:text-navy-dark flex items-center space-x-2"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </Button>
                </a>

                <a
                  href="https://www.linkedin.com/in/tiago-oliveira-49a2a6205/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold hover:text-navy-dark flex items-center space-x-2"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </Button>
                </a>
              </div>
            </div>

            <div className="animate-fade-in">
              <Card className="bg-navy-dark border-gold/30">
                <CardHeader>
                  <CardTitle className="text-gold">Envie uma Mensagem</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gold">Nome</label>
                    <input type="text" className="w-full p-3 rounded-lg bg-navy-light border border-gold/30 text-white focus:border-gold focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gold">Email</label>
                    <input type="email" className="w-full p-3 rounded-lg bg-navy-light border border-gold/30 text-white focus:border-gold focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gold">Mensagem</label>
                    <textarea rows={5} className="w-full p-3 rounded-lg bg-navy-light border border-gold/30 text-white focus:border-gold focus:outline-none resize-none"></textarea>
                  </div>
                  <Button className="w-full bg-gold hover:bg-gold-light text-navy-dark font-semibold">
                    Enviar Mensagem
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-dark border-t border-navy-light py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            © 2024 Meu Portfólio. Desenvolvido com ❤️ e muito ☕
          </p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={openWhatsApp}
          className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
