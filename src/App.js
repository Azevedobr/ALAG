import { useState } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    if (currentPage === 'contato') {
      return <ContatoPage />;
    }
    if (currentPage === 'trabalhe') {
      return <TrabalheConoscoPage />;
    }
    if (currentPage === 'quem-somos') {
      return <QuemSomosPage />;
    }
    if (currentPage === 'servicos') {
      return <ServicosPage />;
    }
    return <HomePage setCurrentPage={setCurrentPage} />;
  };

  return (
    <div className="App">
      <header className={`header ${currentPage === 'home' ? 'header-transparent' : ''}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <h1 onClick={() => setCurrentPage('home')} style={{cursor: 'pointer'}}>Almeida Aguiar</h1>
            </div>
            <nav className="main-nav">
              <a onClick={() => setCurrentPage('home')} className={currentPage === 'home' ? 'active' : ''}>Início</a>
              <a onClick={() => setCurrentPage('quem-somos')} className={currentPage === 'quem-somos' ? 'active' : ''}>Quem somos</a>
              <a onClick={() => setCurrentPage('servicos')} className={currentPage === 'servicos' ? 'active' : ''}>Serviços</a>
              <a onClick={() => setCurrentPage('contato')} className={currentPage === 'contato' ? 'active' : ''}>Contato</a>
              <a onClick={() => setCurrentPage('trabalhe')} className={currentPage === 'trabalhe' ? 'active' : ''}>Trabalhe Conosco</a>
            </nav>
            <div className="header-cta">
            </div>
          </div>
        </div>
      </header>
      {renderPage()}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Fale conosco</h3>
              <div className="social-links">
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h3>Início</h3>
              <ul>
                <li><a onClick={() => setCurrentPage('home')}>Competências</a></li>
                <li><a onClick={() => setCurrentPage('home')}>Depoimentos</a></li>
                <li><a onClick={() => setCurrentPage('home')}>F.A.Q</a></li>
                <li><a onClick={() => setCurrentPage('home')}>Parcerias</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Quem somos</h3>
              <ul>
                <li><a onClick={() => setCurrentPage('quem-somos')}>História</a></li>
                <li><a onClick={() => setCurrentPage('quem-somos')}>Propósito</a></li>
                <li><a onClick={() => setCurrentPage('quem-somos')}>Processo</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Serviços</h3>
              <ul>
                <li><a onClick={() => setCurrentPage('servicos')}>Mezanino</a></li>
                <li><a onClick={() => setCurrentPage('servicos')}>Guarda-corpo</a></li>
                <li><a onClick={() => setCurrentPage('servicos')}>Escadas</a></li>
                <li><a onClick={() => setCurrentPage('servicos')}>Escada helicoidal</a></li>
                <li><a onClick={() => setCurrentPage('servicos')}>Design e Projetos Sob Medida</a></li>
              </ul>
            </div>
            
            
            <div className="footer-section">
              <h3>Contato</h3>
              <p>(11) 95841-5105</p>
              <p>contato@matossilva.com.br</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 Almeida Aguiar Serralheria. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage({ setCurrentPage }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTrabalhoSlide, setCurrentTrabalhoSlide] = useState(0);
  
  const servicos = [
    {
      title: "Design e Projetos Sob Medida",
      description: "Consultoria especializada e elaboração de projetos exclusivos que transformam ideias em soluções práticas e inovadoras."
    },
    {
      title: "Escada helicoidal",
      description: "Criação de escadas helicoidais que maximizam o aproveitamento de espaço e conferem um toque de modernidade e elegância aos ambientes."
    },
    {
      title: "Escadas",
      description: "Desenvolvimento de escadas convencionais com design personalizado, proporcionando conforto e praticidade em cada projeto."
    },
    {
      title: "Guarda-corpo",
      description: "Fabricação de guarda-corpos modernos e seguros, ideais para varandas, mezaninos e áreas elevadas, unindo proteção e design."
    },
    {
      title: "Mezaninos",
      description: "Projeto e instalação que otimizam espaços, agregando funcionalidade e sofisticação para ambientes residenciais e comerciais."
    }
  ];

  const trabalhos = [
    {
      title: "Estrutura Metálica Residencial",
      description: "Cobertura completa para área de lazer com 150m²",
      image: "https://www.brasitelhas.com.br/imagens/informacoes/estrutura-metalica-residencial-03.jpg"
    },
    {
      title: "Portão Automático Comercial",
      description: "Portão de alta segurança para empresa do setor logístico",
      image: "https://www.megaportoes.com.br/portoes-automaticos/imagens/portas-de-aco-valor.jpg"
    },
    {
      title: "Escada Helicoidal",
      description: "Escada moderna para acesso ao mezanino industrial",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI4lOjJn1L88Y30hxCQiX34qReySOIV-DBxg&s"
    },
    {
      title: "Mezanino Industrial",
      description: "Estrutura para otimização de espaço em galpão",
      image: "https://magisengenharia.com/wp-content/uploads/2022/05/projeto-mezanino-metalico-industrial.webp"
    },
    {
      title: "Guarda-corpo Moderno",
      description: "Proteção elegante para varanda residencial",
      image: "https://www.aarquiteta.com.br/blog/wp-content/uploads/2025/02/guarda-corpo4.jpg.webp"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % servicos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + servicos.length) % servicos.length);
  };

  const nextTrabalhoSlide = () => {
    setCurrentTrabalhoSlide((prev) => (prev + 1) % trabalhos.length);
  };

  const prevTrabalhoSlide = () => {
    setCurrentTrabalhoSlide((prev) => (prev - 1 + trabalhos.length) % trabalhos.length);
  };

  return (
    <>

      <section className="hero">
        <div className="hero-video">
          <iframe 
            src="https://www.youtube.com/embed/Tgpl7Rco4_M?autoplay=1&mute=1&loop=1&playlist=Tgpl7Rco4_M&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h4 className="hero-welcome">Bem-vindo à Almeida Aguiar</h4>
            <h1 className="hero-main-title">Estruturas metálicas e serralheria</h1>
            <p className="hero-description">Vamos transformar suas ideias em realidade, criando peças únicas e duradouras que refletem sua visão e estilo. Explore nosso mundo de criatividade, qualidade e excelência.</p>
            <div className="hero-buttons">
              <a className="elementor-button" href="https://api.whatsapp.com/send?phone=5511958415105&text=Olá, eu vim através do site da Artsolda" target="_blank">
                <span className="elementor-button-content-wrapper">
                  <span className="elementor-button-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                      <path d="M13.75 1.5V11.25C13.7501 11.3984 13.7062 11.5435 13.6238 11.667C13.5414 11.7904 13.4242 11.8867 13.2871 11.9435C13.15 12.0003 12.9991 12.0151 12.8535 11.9861C12.7079 11.9572 12.5743 11.8856 12.4694 11.7806L8.12499 7.43531L1.53061 14.0306C1.38988 14.1714 1.19901 14.2504 0.99999 14.2504C0.800967 14.2504 0.610095 14.1714 0.469365 14.0306C0.328634 13.8899 0.249573 13.699 0.249573 13.5C0.249573 13.301 0.328634 13.1101 0.469365 12.9694L7.06468 6.375L2.71936 2.03063C2.61436 1.92573 2.54283 1.79204 2.51384 1.64648C2.48485 1.50092 2.49971 1.35002 2.55652 1.21291C2.61334 1.07579 2.70956 0.958613 2.833 0.87621C2.95645 0.793807 3.10157 0.749883 3.24999 0.75H13C13.1989 0.75 13.3897 0.829018 13.5303 0.96967C13.671 1.11032 13.75 1.30109 13.75 1.5Z" fill="white"></path>
                    </svg>
                  </span>
                  <span className="elementor-button-text">Fale conosco</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number-wrapper">
                <span className="stat-prefix">+</span>
                <span className="stat-number">16,000</span>
                <span className="stat-suffix"> m²</span>
              </div>
              <p className="stat-title">Estruturas construídas</p>
            </div>
            <div className="stat-item">
              <div className="stat-number-wrapper">
                <span className="stat-prefix">+</span>
                <span className="stat-number">1,500</span>
              </div>
              <p className="stat-title">Móveis Industriais Projetados</p>
            </div>
            <div className="stat-item">
              <div className="stat-number-wrapper">
                <span className="stat-prefix">+</span>
                <span className="stat-number">1000</span>
              </div>
              <p className="stat-title">Projetos únicos</p>
            </div>
            <div className="stat-item">
              <div className="stat-number-wrapper">
                <span className="stat-prefix">+</span>
                <span className="stat-number">30</span>
              </div>
              <p className="stat-title">Anos de experiência</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Conheça a Almeida Aguiar</h2>
              <p>Começamos nossa história em 1996, quando nos tornamos uma empresa de serralheria. Todo dia é uma jornada de desafios e realizações, onde investimos constantemente para aprimorar nossos serviços e garantir o melhor atendimento possível.</p>
              <p>Nosso propósito vai além de simplesmente ser uma boa serralheria. Buscamos transmitir confiança e credibilidade em tudo o que fazemos, pois sabemos que é assim que construímos parcerias duradouras e significativas.</p>
              <p>Se você busca um parceiro de confiança para seus projetos de que demandam serralheria, venha nos conhecer. Na Almeida Aguiar, entendemos que o serviço de serralheria vai além do simples manuseio de metais.</p>
              <a className="elementor-button" href="https://api.whatsapp.com/send?phone=5511958415105&text=Olá, eu vim através do site da Artsolda" target="_blank">
                <span className="elementor-button-content-wrapper">
                  <span className="elementor-button-text">Fale conosco</span>
                </span>
              </a>
            </div>
            <div className="about-image">
              <img src="/images/logo.png.png" alt="Logo Almeida Aguiar" style={{width: '500px', height: '500px', objectFit: 'contain', borderRadius: '15px'}} />
            </div>
          </div>
        </div>
      </section>

      <section className="principais-servicos">
        <div className="container">
          <div className="servicos-header">
            <h4>Principais serviços</h4>
            <h2>Como podemos te ajudar?</h2>
            <button className="ver-tudo-btn" onClick={() => setCurrentPage('servicos')}>VER TUDO</button>
          </div>
          <div className="carousel-container">
            <button className="carousel-btn prev" onClick={prevSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="servicos-carousel">
              <div className="carousel-track" style={{transform: `translateX(-${currentSlide * (100/servicos.length)}%)`}}>
                {[...servicos, ...servicos, ...servicos].map((servico, index) => (
                  <div key={index} className="servico-card">
                    <h3>{servico.title}</h3>
                    <p>{servico.description}</p>
                    <button className="ver-mais-btn">VER MAIS</button>
                  </div>
                ))}
              </div>
            </div>
            <button className="carousel-btn next" onClick={nextSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="carousel-dots">
            {servicos.map((_, index) => (
              <button 
                key={index} 
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>NOSSOS SERVIÇOS</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🚪</div>
              <h3>PORTÕES</h3>
              <p>Portões residenciais e comerciais com design moderno e segurança garantida</p>
              <ul>
                <li>Portões de garagem</li>
                <li>Portões sociais</li>
                <li>Portões industriais</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h3>GRADES</h3>
              <p>Grades de proteção e decorativas para todos os tipos de ambientes</p>
              <ul>
                <li>Grades para janelas</li>
                <li>Grades decorativas</li>
                <li>Grades de segurança</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🏗️</div>
              <h3>ESTRUTURAS METÁLICAS</h3>
              <p>Estruturas sob medida para construção civil e projetos especiais</p>
              <ul>
                <li>Coberturas metálicas</li>
                <li>Escadas e corrimãos</li>
                <li>Estruturas industriais</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>SOLDAS ESPECIAIS</h3>
              <p>Serviços de solda especializada com equipamentos de última geração</p>
              <ul>
                <li>Solda MIG/MAG</li>
                <li>Solda TIG</li>
                <li>Solda de alumínio</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="trabalhos-sucesso">
        <div className="container">
          <h2>TRABALHOS DE SUCESSO</h2>
          <div className="carousel-container">
            <button className="carousel-btn prev" onClick={prevTrabalhoSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="trabalhos-carousel">
              <div className="carousel-track" style={{transform: `translateX(-${currentTrabalhoSlide * (100/trabalhos.length)}%)`}}>
                {[...trabalhos, ...trabalhos, ...trabalhos].map((trabalho, index) => (
                  <div key={index} className="trabalho-card">
                    <div className="trabalho-image">
                      <img src={trabalho.image} alt={trabalho.title} />
                    </div>
                    <h3>{trabalho.title}</h3>
                    <p>{trabalho.description}</p>
                    <button className="ver-mais-btn">VER MAIS</button>
                  </div>
                ))}
              </div>
            </div>
            <button className="carousel-btn next" onClick={nextTrabalhoSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="carousel-dots">
            {trabalhos.map((_, index) => (
              <button 
                key={index} 
                className={`dot ${index === currentTrabalhoSlide ? 'active' : ''}`}
                onClick={() => setCurrentTrabalhoSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="why-choose-overlay"></div>
        <div className="container">
          <div className="why-choose-content">
            <h2>POR QUE ESCOLHER A ALMEIDA AGUIAR?</h2>
            <div className="features-grid">
              <div className="feature">
                <div className="feature-icon" style={{backgroundColor: '#1a365d', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M6 9l6 6 6-6"/>
                    <circle cx="12" cy="12" r="10"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>QUALIDADE GARANTIDA</h3>
                  <p>Utilizamos apenas materiais de primeira linha e técnicas avançadas para garantir durabilidade e excelência</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon" style={{backgroundColor: '#1a365d', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>ENTREGA NO PRAZO</h3>
                  <p>Cumprimos rigorosamente os prazos estabelecidos, respeitando seu cronograma e necessidades</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon" style={{backgroundColor: '#1a365d', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>ORÇAMENTO GRATUITO</h3>
                  <p>Avaliação completa e orçamento detalhado sem compromisso para seu projeto</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon" style={{backgroundColor: '#1a365d', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>ATENDIMENTO PERSONALIZADO</h3>
                  <p>Cada projeto é único e recebe atenção especial da nossa equipe especializada</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon" style={{backgroundColor: '#1a365d', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                    <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"/>
                    <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>EXPERIÊNCIA COMPROVADA</h3>
                  <p>Mais de 30 anos no mercado com milhares de projetos executados com sucesso</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon" style={{backgroundColor: '#1a365d', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>GARANTIA TOTAL</h3>
                  <p>Todos os nossos trabalhos possuem garantia completa e suporte pós-venda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>PRONTO PARA COMEÇAR SEU PROJETO?</h2>
          <p>Entre em contato conosco e receba um orçamento personalizado</p>
          <div className="cta-buttons">
            <a className="elementor-button" href="https://api.whatsapp.com/send?phone=5511958415105&text=Olá, eu vim através do site da Artsolda" target="_blank" style={{backgroundColor: '#25D366', borderColor: '#25D366'}}>
              <span className="elementor-button-content-wrapper">
                <span className="elementor-button-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                    <path d="M13.75 1.5V11.25C13.7501 11.3984 13.7062 11.5435 13.6238 11.667C13.5414 11.7904 13.4242 11.8867 13.2871 11.9435C13.15 12.0003 12.9991 12.0151 12.8535 11.9861C12.7079 11.9572 12.5743 11.8856 12.4694 11.7806L8.12499 7.43531L1.53061 14.0306C1.38988 14.1714 1.19901 14.2504 0.99999 14.2504C0.800967 14.2504 0.610095 14.1714 0.469365 14.0306C0.328634 13.8899 0.249573 13.699 0.249573 13.5C0.249573 13.301 0.328634 13.1101 0.469365 12.9694L7.06468 6.375L2.71936 2.03063C2.61436 1.92573 2.54283 1.79204 2.51384 1.64648C2.48485 1.50092 2.49971 1.35002 2.55652 1.21291C2.61334 1.07579 2.70956 0.958613 2.833 0.87621C2.95645 0.793807 3.10157 0.749883 3.24999 0.75H13C13.1989 0.75 13.3897 0.829018 13.5303 0.96967C13.671 1.11032 13.75 1.30109 13.75 1.5Z" fill="white"></path>
                  </svg>
                </span>
                <span className="elementor-button-text">Fale conosco</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}



function TrabalheConoscoPage() {
  return (
    <div className="trabalhe-page">
      <section className="trabalhe-hero">
        <div className="container">
          <h1>Trabalhe Conosco</h1>
          <p>Faça parte da nossa equipe e construa o futuro com a gente</p>
        </div>
      </section>
      
      <section className="trabalhe-content">
        <div className="container">
          <div className="trabalhe-grid">
            <div className="trabalhe-info">
              <h2>Por que trabalhar conosco?</h2>
              <div className="benefit-item">
                <h3>Ambiente de Trabalho</h3>
                <p>Ambiente seguro e colaborativo com foco no crescimento profissional</p>
              </div>
              <div className="benefit-item">
                <h3>Benefícios</h3>
                <p>Vale transporte, vale refeição, plano de saúde e participação nos lucros</p>
              </div>
              <div className="benefit-item">
                <h3>Crescimento</h3>
                <p>Oportunidades de capacitação e crescimento dentro da empresa</p>
              </div>
              <div className="benefit-item">
                <h3>Estabilidade</h3>
                <p>Empresa consolidada no mercado há mais de 15 anos</p>
              </div>
            </div>
            
            <div className="trabalhe-form">
              <h2>Envie seu Currículo</h2>
              <form>
                <input type="text" placeholder="Nome completo" required />
                <input type="email" placeholder="E-mail" required />
                <input type="tel" placeholder="Telefone" required />
                <select required>
                  <option value="">Área de interesse</option>
                  <option value="soldador">Soldador</option>
                  <option value="serralheiro">Serralheiro</option>
                  <option value="auxiliar">Auxiliar de Produção</option>
                  <option value="vendas">Vendas</option>
                  <option value="administrativo">Administrativo</option>
                </select>
                <select required>
                  <option value="">Experiência</option>
                  <option value="sem-experiencia">Sem experiência</option>
                  <option value="1-2-anos">1 a 2 anos</option>
                  <option value="3-5-anos">3 a 5 anos</option>
                  <option value="mais-5-anos">Mais de 5 anos</option>
                </select>
                <textarea placeholder="Conte um pouco sobre você e sua experiência" rows="4"></textarea>
                <div className="file-upload">
                  <label htmlFor="curriculo">Anexar Currículo (PDF)</label>
                  <input type="file" id="curriculo" accept=".pdf" />
                </div>
                <button type="submit" className="submit-button">Enviar Currículo</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function QuemSomosPage() {
  return (
    <div className="quem-somos-page">
      <section className="quem-somos-hero">
        <div className="container">
          <h1>QUEM SOMOS</h1>
          <p>Conheça a Almeida Aguiar</p>
        </div>
      </section>
      
      <section className="nossa-historia">
        <div className="container">
          <div className="historia-grid">
            <div className="historia-text">
              <h2>Conheça a Almeida Aguiar</h2>
              <p>Começamos nossa história em 1996, quando nos tornamos uma empresa de serralheria. Todo dia é uma jornada de desafios e realizações, onde investimos constantemente para aprimorar nossos serviços e garantir o melhor atendimento possível.</p>
              <p>Nosso propósito vai além de simplesmente ser uma boa serralheria. Buscamos transmitir confiança e credibilidade em tudo o que fazemos, pois sabemos que é assim que construímos parcerias duradouras e significativas.</p>
              <p>Se você busca um parceiro de confiança para seus projetos de que demandam serralheria, venha nos conhecer. Na Almeida Aguiar, entendemos que o serviço de serralheria vai além do simples manuseio de metais.</p>
              <a className="elementor-button" href="https://api.whatsapp.com/send?phone=5511958415105&text=Olá, eu vim através do site da Artsolda" target="_blank">
                <span className="elementor-button-content-wrapper">
                  <span className="elementor-button-text">Fale conosco</span>
                </span>
              </a>
            </div>
            <div className="historia-image">
              <img src="/images/logo.png.png" alt="Logo Almeida Aguiar" style={{width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '15px'}} />
            </div>
          </div>
        </div>
      </section>

      <section className="missao-visao">
        <div className="container">
          <div className="mvv-grid">
            <div className="mvv-item">
              <h3>MISSÃO</h3>
              <p>Oferecer soluções completas em estruturas metálicas, portões e grades, com qualidade superior, prazo de entrega cumprido e atendimento personalizado, superando as expectativas dos nossos clientes.</p>
            </div>
            <div className="mvv-item">
              <h3>VISÃO</h3>
              <p>Ser reconhecida como a principal referência em serralheria na região, expandindo nossa atuação e mantendo a excelência em todos os nossos serviços.</p>
            </div>
            <div className="mvv-item">
              <h3>VALORES</h3>
              <ul>
                <li>Qualidade em primeiro lugar</li>
                <li>Compromisso com prazos</li>
                <li>Atendimento personalizado</li>
                <li>Inovação constante</li>
                <li>Transparência nas relações</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="equipe">
        <div className="container">
          <h2>NOSSA EQUIPE</h2>
          <div className="equipe-grid">
            <div className="membro">
              <div className="foto-placeholder">
                <span>👨‍💼</span>
              </div>
              <h3>Elias Aguiar</h3>
              <p>Sócio Fundador</p>
              <p>Expert em soldas especiais e projetos personalizados, formada serralheria pelo Senais.</p>
            </div>
            <div className="membro">
              <div className="foto-placeholder">
                <span>👨‍💼</span>
              </div>
              <h3>Cinira Almeida</h3>
              <p>Sócio Fundadora</p>
              <p>Especialista em estruturas metálicas com mais de 20 anos de experiência no setor.</p>
            </div>
            <div className="membro">
              <div className="foto-placeholder">
                <span>👨‍🔧</span>
              </div>
              <h3>Equipe Técnica</h3>
              <p>Profissionais Qualificados</p>
              <p>Nossa equipe conta com soldadores certificados e técnicos especializados em estruturas metálicas.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="diferenciais">
        <div className="container">
          <h2>NOSSOS DIFERENCIAIS</h2>
          <div className="diferenciais-grid">
            <div className="diferencial">
              <div className="diferencial-icon">🏆</div>
              <h3>EXPERIÊNCIA COMPROVADA</h3>
              <p>Mais de 15 anos no mercado com centenas de projetos executados com sucesso.</p>
            </div>
            <div className="diferencial">
              <div className="diferencial-icon">⚙️</div>
              <h3>TECNOLOGIA AVANÇADA</h3>
              <p>Equipamentos modernos e técnicas atualizadas para garantir a melhor qualidade.</p>
            </div>
            <div className="diferencial">
              <div className="diferencial-icon">🤝</div>
              <h3>ATENDIMENTO PERSONALIZADO</h3>
              <p>Cada cliente é único e recebe atenção especial em todas as etapas do projeto.</p>
            </div>
            <div className="diferencial">
              <div className="diferencial-icon">✅</div>
              <h3>GARANTIA DE QUALIDADE</h3>
              <p>Todos os nossos trabalhos possuem garantia e são executados com materiais de primeira linha.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServicosPage() {
  return (
    <div className="servicos-page">
      <section className="servicos-hero">
        <div className="container">
          <h1>NOSSOS SERVIÇOS</h1>
          <p>Soluções completas em estruturas metálicas</p>
        </div>
      </section>
      
      <section className="servicos-detalhados">
        <div className="container">
          <div className="servico-detalhado">
            <div className="servico-content">
              <div className="servico-text">
                <h2>PORTÕES RESIDENCIAIS E COMERCIAIS</h2>
                <p>Desenvolvemos portões sob medida com design moderno e segurança garantida. Nossos portões são fabricados com materiais de alta qualidade e acabamento impecável.</p>
                <ul>
                  <li>Portões de garagem automáticos</li>
                  <li>Portões sociais decorativos</li>
                  <li>Portões industriais de grande porte</li>
                  <li>Portões basculantes e de correr</li>
                  <li>Sistemas de automação integrados</li>
                </ul>
                <button className="servico-button">SOLICITAR ORÇAMENTO</button>
              </div>
              <div className="servico-image">
                <div className="image-placeholder">
                  <span>🚪 Portões</span>
                </div>
              </div>
            </div>
          </div>

          <div className="servico-detalhado reverse">
            <div className="servico-content">
              <div className="servico-image">
                <div className="image-placeholder">
                  <span>🛡️ Grades</span>
                </div>
              </div>
              <div className="servico-text">
                <h2>GRADES DE PROTEÇÃO E DECORATIVAS</h2>
                <p>Grades personalizadas que combinam segurança e estética. Oferecemos diversos modelos e acabamentos para atender todas as necessidades dos nossos clientes.</p>
                <ul>
                  <li>Grades para janelas e portas</li>
                  <li>Grades decorativas para fachadas</li>
                  <li>Grades de segurança reforçadas</li>
                  <li>Grades para áreas comerciais</li>
                  <li>Designs personalizados</li>
                </ul>
                <button className="servico-button">SOLICITAR ORÇAMENTO</button>
              </div>
            </div>
          </div>

          <div className="servico-detalhado">
            <div className="servico-content">
              <div className="servico-text">
                <h2>ESTRUTURAS METÁLICAS</h2>
                <p>Projetos completos de estruturas metálicas para construção civil e industrial. Desenvolvemos soluções sob medida com cálculo estrutural e acabamento profissional.</p>
                <ul>
                  <li>Estruturas para telhados</li>
                  <li>Mezaninos e passarelas</li>
                  <li>Coberturas metálicas</li>
                  <li>Estruturas industriais</li>
                  <li>Projetos personalizados</li>
                </ul>
                <button className="servico-button">SOLICITAR ORÇAMENTO</button>
              </div>
              <div className="servico-image">
                <div className="image-placeholder">
                  <span>🏗️ Estruturas</span>
                </div>
              </div>
            </div>
          </div>

          <div className="servico-detalhado reverse">
            <div className="servico-content">
              <div className="servico-image">
                <div className="image-placeholder">
                  <span>⚡ Soldas</span>
                </div>
              </div>
              <div className="servico-text">
                <h2>SOLDAS ESPECIAIS</h2>
                <p>Serviços especializados de solda com técnicas avançadas e equipamentos de última geração. Atendemos projetos que exigem alta precisão e qualidade.</p>
                <ul>
                  <li>Solda MIG/MAG</li>
                  <li>Solda TIG</li>
                  <li>Solda de alumínio</li>
                  <li>Reparos e manutenção</li>
                  <li>Soldas em campo</li>
                </ul>
                <button className="servico-button">SOLICITAR ORÇAMENTO</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContatoPage() {
  return (
    <div className="contato-page">
      <section className="contato-hero">
        <div className="container">
          <h1>CONTATO</h1>
          <p>Entre em contato conosco</p>
        </div>
      </section>
      
      <section className="contato-info">
        <div className="container">
          <div className="contato-grid">
            <div className="contato-item">
              <div className="contato-icon">📞</div>
              <h3>TELEFONE</h3>
              <p>(11) 95841-5105</p>
              <a href="tel:+5511958415105" className="contato-link">Ligar agora</a>
            </div>
            <div className="contato-item">
              <div className="contato-icon">💬</div>
              <h3>WHATSAPP</h3>
              <p>(11) 95841-5105</p>
              <a href="https://api.whatsapp.com/send?phone=5511958415105" className="contato-link" target="_blank" rel="noopener noreferrer">Enviar mensagem</a>
            </div>
            <div className="contato-item">
              <div className="contato-icon">📍</div>
              <h3>ENDEREÇO</h3>
              <p>São Paulo, SP</p>
              <a href="#" className="contato-link">Ver no mapa</a>
            </div>
            <div className="contato-item">
              <div className="contato-icon">⏰</div>
              <h3>HORÁRIO</h3>
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contato-form">
        <div className="container">
          <div className="form-container">
            <h2>Solicite um Orçamento</h2>
            <form className="orcamento-form">
              <div className="form-row">
                <input type="text" placeholder="Nome completo" required />
                <input type="email" placeholder="E-mail" required />
              </div>
              <div className="form-row">
                <input type="tel" placeholder="Telefone" required />
                <select required>
                  <option value="">Tipo de serviço</option>
                  <option value="portoes">Portões</option>
                  <option value="grades">Grades</option>
                  <option value="estruturas">Estruturas Metálicas</option>
                  <option value="soldas">Soldas Especiais</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
              <textarea placeholder="Descreva seu projeto" rows="4" required></textarea>
              <button type="submit" className="submit-button">Solicitar Orçamento</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;