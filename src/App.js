import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CadastrarSOS from './cadastrarSOS'; // Páginas de SOS
import VerSOS from './VerSOS';           // Páginas de SOS
import './styles.css';  // Importando o arquivo de estilos

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="app-container">
      {/* Barra de navegação */}
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>SOS Animais</h1>
        </div>
        <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className="navbar-item">Início</Link>
          <Link to="/cadastrar-sos" className="navbar-item">Cadastrar SOS</Link>
          <Link to="/sos" className="navbar-item">Ver SOS</Link>
        </div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </nav>

      {/* Conteúdo do App */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar-sos" element={<CadastrarSOS />} />
        <Route path="/sos" element={<VerSOS />} />
      </Routes>
    </div>
  );
};

const Home = () => (
  <div className="home">
    <br></br> <br></br>
    <h2>Bem-vindo ao SOS Animais</h2>
    <p>Projeto para cadastrar e visualizar SOS de animais.</p>
    <br></br>
    {/* Seção de Pesquisa sobre Projetos de Ajuda aos Animais */}
    <div className="animal-help-section">
      <h3>Projetos que Ajudam os Animais</h3>
      <br></br>
      <p>Existem muitos projetos ao redor do mundo que ajudam os animais a sobreviver e prosperar. Esses projetos são vitais para o bem-estar animal e para a preservação da fauna. Abaixo estão alguns exemplos de iniciativas que têm um impacto positivo:</p> <br></br>
      <ul>
        <li><strong>Refúgios de Animais:</strong> Refúgios que acolhem animais abandonados, maltratados ou em situação de risco. Eles oferecem cuidados, abrigo e assistência médica.</li> <br></br>
        <li><strong>Programas de Castração:</strong> Projetos que ajudam a controlar a população de animais abandonados através de castração, reduzindo o número de animais nas ruas.</li> <br></br>
        <li><strong>Resgates de Animais Selvagens:</strong> Organizações que se dedicam a resgatar animais selvagens em perigo, seja devido à caça ilegal ou à destruição de seus habitats.</li> <br></br>
        <li><strong>Educação e Conscientização:</strong> Projetos que educam a sociedade sobre a importância de proteger os animais e como lidar com eles de maneira ética e respeitosa.</li> <br></br>
      </ul>
    </div>
    
    {/* Texto de Incentivo */}
    <div className="motivation-section">
      <h3>Ajude os Animais!</h3> <br></br>
      <p>Você sabia que um pequeno gesto pode salvar a vida de um animal? Muitos animais estão sofrendo em situações de abandono, maus-tratos ou falta de cuidados básicos. A sua ajuda pode fazer a diferença!</p>
      <p>Existem várias formas de ajudar os animais, seja através de doações, se oferecendo como voluntário em ONGs, adotando um animal ou apenas espalhando a palavra sobre os problemas que eles enfrentam. Seu apoio pode ser crucial para melhorar a vida de milhares de animais que, sem a ajuda da comunidade, não teriam chances de sobrevivência.</p>
      <p>Não espere mais! Faça parte de um movimento global de cuidado e amor pelos animais. Juntos, podemos construir um mundo melhor para eles!</p>
    </div>
    <div className="buttons">
      <Link to="/cadastrar-sos"><button>Cadastrar SOS</button></Link>
      <Link to="/sos"><button>Ver SOS</button></Link>
    </div>
  </div>
);

export default App;
  