import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Versos.css';

const SOS = () => {
  const [sosList, setSosList] = useState([]);
  const navigate = useNavigate(); // Hook para navegação
  const [statusResolvido, setStatusResolvido] = useState({}); // Estado para controle de resolução

  useEffect(() => {
    // Recupera os SOS armazenados no localStorage
    const sosExistentes = JSON.parse(localStorage.getItem('sos')) || [];
    setSosList(sosExistentes);
    
    // Cria um objeto de status de resolução com base nos dados existentes
    const statusMap = sosExistentes.reduce((acc, sos, index) => {
      acc[index] = sos.resolvido || 'nao'; // Marca como 'nao' caso não tenha a chave 'resolvido'
      return acc;
    }, {});
    setStatusResolvido(statusMap);
  }, []);

  // Função para atualizar o status de resolução
  const handleStatusChange = (index, event) => {
    const updatedStatus = { ...statusResolvido, [index]: event.target.value };
    setStatusResolvido(updatedStatus);
    
    // Atualiza o estado do SOS no localStorage
    const updatedSosList = [...sosList];
    updatedSosList[index].resolvido = event.target.value;
    localStorage.setItem('sos', JSON.stringify(updatedSosList));
  };

  // Função para excluir um SOS
  const handleDelete = (index) => {
    // Remove o SOS da lista
    const updatedSosList = sosList.filter((_, i) => i !== index);
    setSosList(updatedSosList);
    
    // Atualiza o localStorage com a nova lista
    localStorage.setItem('sos', JSON.stringify(updatedSosList));
  };

  // Função para voltar à página inicial
  const handleVoltar = () => {
    navigate('/'); // Navega para a página inicial usando o useNavigate
  };

  return (
    <div className="sos-container">
      <h2>Lista de SOS</h2>

      <table>
        <thead>
          <tr>
            <th>Tipo de Animal</th>
            <th>Localização</th>
            <th>Bairro</th>
            <th>Cidade</th>
            <th>Urgência</th>
            <th>Fratura Exposta</th>
            <th>Descrição</th>
            <th>Problema Resolvido</th> {/* Nova coluna */}
            <th>Ação</th> {/* Coluna para o botão de excluir */}
          </tr>
        </thead>
        <tbody>
          {sosList.map((sos, index) => (
            <tr key={index}>
              <td>{sos.tipoAnimal}</td>
              <td>{sos.localizacao}</td>
              <td>{sos.bairro}</td>
              <td>{sos.cidade}</td>
              <td>{sos.urgencia}</td>
              <td>{sos.fraturaExposta === 'sim' ? 'Sim' : 'Não'}</td>
              <td>{sos.descricao}</td>
              <td>
                <div>
                  <label>
                    <input 
                      type="radio" 
                      name={`resolvido-${index}`} 
                      value="sim" 
                      checked={statusResolvido[index] === 'sim'}
                      onChange={(event) => handleStatusChange(index, event)} 
                    />
                    Sim
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      name={`resolvido-${index}`} 
                      value="nao" 
                      checked={statusResolvido[index] === 'nao'}
                      onChange={(event) => handleStatusChange(index, event)} 
                    />
                    Não
                  </label>
                </div>
              </td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(index)}>Excluir</button> {/* Botão para excluir */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SOS;
