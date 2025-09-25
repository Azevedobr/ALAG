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
          </div>
        </div>
      </header>
      {renderPage()}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Contato</h3>
              <p>(11) 95841-5105</p>
              <p>contato@almeidaaguiar.com.br</p>
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
            <p className="hero-description">Vamos transformar suas ideias em realidade, criando peças únicas e duradouras que refletem sua visão e estilo.</p>
            <div className="hero-buttons">
              <a className="elementor-button" href="https://api.whatsapp.com/send?phone=5511958415105" target="_blank" rel="noopener noreferrer">
                <span className="elementor-button-content-wrapper">
                  <span className="elementor-button-text">Fale conosco</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Conheça a Almeida Aguiar</h2>
              <p>Começamos nossa história em 1996, quando nos tornamos uma empresa de serralheria. Todo dia é uma jornada de desafios e realizações.</p>
              <p>Nosso propósito vai além de simplesmente ser uma boa serralheria. Buscamos transmitir confiança e credibilidade em tudo o que fazemos.</p>
              <a className="elementor-button" href="https://api.whatsapp.com/send?phone=5511958415105" target="_blank" rel="noopener noreferrer">
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

      <section className="services">
        <div className="container">
          <h2>NOSSOS SERVIÇOS</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🚪</div>
              <h3>PORTÕES</h3>
              <p>Portões residenciais e comerciais com design moderno e segurança garantida</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h3>GRADES</h3>
              <p>Grades de proteção e decorativas para todos os tipos de ambientes</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏗️</div>
              <h3>ESTRUTURAS METÁLICAS</h3>
              <p>Estruturas sob medida para construção civil e projetos especiais</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>SOLDAS ESPECIAIS</h3>
              <p>Serviços de solda especializada com equipamentos de última geração</p>
            </div>
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
          <p>Faça parte da nossa equipe</p>
        </div>
      </section>
      
      <section className="trabalhe-content">
        <div className="container">
          <div className="trabalhe-grid">
            <div className="trabalhe-info">
              <h2>Por que trabalhar conosco?</h2>
              <div className="benefit-item">
                <h3>Ambiente de Trabalho</h3>
                <p>Ambiente seguro e colaborativo</p>
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
                </select>
                <textarea placeholder="Conte sobre você" rows="4"></textarea>
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
              <h2>Nossa História</h2>
              <p>Empresa fundada em 1996, especializada em serralheria e estruturas metálicas.</p>
            </div>
            <div className="historia-image">
              <img src="/images/logo.png.png" alt="Logo Almeida Aguiar" style={{width: '100%', height: 'auto'}} />
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
                <p>Desenvolvemos portões sob medida com design moderno e segurança garantida.</p>
                <ul>
                  <li>Portões de garagem automáticos</li>
                  <li>Portões sociais decorativos</li>
                  <li>Portões industriais</li>
                </ul>
                <button className="servico-button">SOLICITAR ORÇAMENTO</button>
              </div>
            </div>
          </div>

          <div className="servico-detalhado">
            <div className="servico-content">
              <div className="servico-text">
                <h2>GRADES DE PROTEÇÃO</h2>
                <p>Grades personalizadas que combinam segurança e estética.</p>
                <ul>
                  <li>Grades para janelas</li>
                  <li>Grades decorativas</li>
                  <li>Grades de segurança</li>
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
          </div>
        </div>
      </section>

      <section className="contato-form">
        <div className="container">
          <div className="form-container">
            <h2>Solicite um Orçamento</h2>
            <form className="orcamento-form">
              <input type="text" placeholder="Nome completo" required />
              <input type="email" placeholder="E-mail" required />
              <input type="tel" placeholder="Telefone" required />
              <select required>
                <option value="">Tipo de serviço</option>
                <option value="portoes">Portões</option>
                <option value="grades">Grades</option>
                <option value="estruturas">Estruturas Metálicas</option>
              </select>
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