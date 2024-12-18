import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18
import App from './App'; // Componente App
import { BrowserRouter } from 'react-router-dom'; // Navegação via React Router
import './styles.css';


// Renderizando usando a nova API do React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
