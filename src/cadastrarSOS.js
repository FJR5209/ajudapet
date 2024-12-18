import React, { useState } from 'react';
import Toastify from 'toastify-js'; // Importe o Toastify
import 'toastify-js/src/toastify.css'; // Importe o CSS do Toastify
import './styles/cadastro.css'; // Certifique-se de ter o arquivo de estilos

const CadastrarSOS = () => {
  const [tipoAnimal, setTipoAnimal] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [horario, setHorario] = useState('');
  const [urgencia, setUrgencia] = useState('');
  const [foto, setFoto] = useState(null);
  const [descricao, setDescricao] = useState('');
  const [fraturaExposta, setFraturaExposta] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoSOS = {
      tipoAnimal,
      localizacao,
      bairro,
      cidade,
      horario,
      urgencia,
      foto,
      descricao,
      fraturaExposta,
    };

    const sosExistentes = JSON.parse(localStorage.getItem('sos')) || [];
    sosExistentes.push(novoSOS);
    localStorage.setItem('sos', JSON.stringify(sosExistentes));

    // Exibe a notificação de sucesso com as opções de ação
    Toastify({
      text: "Cadastro realizado com sucesso!",
      duration: 5000,
      close: true,
      gravity: "top",
      position: "center",
      style: {
        background: "007bff", // Usando style.background em vez de backgroundColor
      },
      stopOnFocus: true,
      onClick: () => {
        window.location.href = "/";
      },
    }).showToast();

    // Limpa os campos do formulário
    setTipoAnimal('');
    setLocalizacao('');
    setBairro('');
    setCidade('');
    setHorario('');
    setUrgencia('');
    setFoto(null);
    setDescricao('');
    setFraturaExposta('');
  };



  return (
    <div className="form-container">
      <h2>Cadastrar SOS</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tipo de Animal</label>
          <select
            value={tipoAnimal}
            onChange={(e) => setTipoAnimal(e.target.value)}
            required
          >
            <option value="">Selecione o tipo de animal</option>
            <option value="Cachorro">Cachorro</option>
            <option value="Gato">Gato</option>
            <option value="Pássaro">Pássaro</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div>
          <label>Localização</label>
          <input
            type="text"
            value={localizacao}
            onChange={(e) => setLocalizacao(e.target.value)}
            placeholder="Localização"
            required
          />
        </div>
        <div>
          <label>Bairro</label>
          <input
            type="text"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            placeholder="Bairro"
            required
          />
        </div>
        <div>
          <label>Cidade</label>
          <input
            type="text"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            placeholder="Cidade"
            required
          />
        </div>
        <div>
          <label>Horário</label>
          <input
            type="time"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Urgência</label>
          <select
            value={urgencia}
            onChange={(e) => setUrgencia(e.target.value)}
            required
          >
            <option value="">Selecione a urgência</option>
            <option value="urgente">Urgente</option>
            <option value="critico">Crítico</option>
            <option value="alarmante">Alarmante</option>
          </select>
        </div>
        <div>
          <label>Foto (opcional)</label>
          <input
            type="file"
            onChange={(e) => setFoto(e.target.files[0])}
          />
        </div>
        <div>
          <label>Descrição</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descreva o que aconteceu com o animal"
            rows="4"
            required
          />
        </div>
        <div>
          <label>Fratura Exposta</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="fraturaExposta"
                value="sim"
                checked={fraturaExposta === 'sim'}
                onChange={(e) => setFraturaExposta(e.target.value)}
              />
              Sim
            </label>
            <label>
              <input
                type="radio"
                name="fraturaExposta"
                value="nao"
                checked={fraturaExposta === 'nao'}
                onChange={(e) => setFraturaExposta(e.target.value)}
              />
              Não
            </label>
          </div>
        </div>
        <button type="submit" className="btn">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastrarSOS;
