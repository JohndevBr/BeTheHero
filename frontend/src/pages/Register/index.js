import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg'
import api from '../../services/api';


export default function Register(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();
  // Depois de exportar a API, cria uma função dentro da função da página no caso Register
  async function handleRegister(event){
    event.preventDefault(); // function para previnir o recarregamento da página
    console.log({
      name,
      email,
      whatsapp,
      city,
      uf
    }); //  Se eu quiser testar se algo está funcionando coloco o log na função que será ativada no submit
    
    const data ={ // isso seria o req.body
      name,
      email,
      whatsapp,
      city,
      uf
    }; // sempre colocar em uma váriável o que eu quero enviar para a API

  //  api.post('ongs', data)  já enviaria as informações para a API

    try {
      const res = await api.post('ongs', data);
      console.log(res); // para ver as respostas que recebo da api 
      alert(`Tudo certo! Seu ID é ${res.data.id}`); // data.id é o dado que o backend me devolve
      history.push('/');
    } catch (err) {
      alert('Algo deu errado! Tente novamente');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        
        <section>
          <img src={logoImg} alt="Be The Hero"/>
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
          <Link className="back-link" to="/"> 
              <FiArrowLeft size={16} color="#E02041" />
               Voltar para o Logon </Link>
        </section>

        <form onSubmit={handleRegister}> 
          <input 
            placeholder="Nome da ONG"
            value={name} // constante criada lá em cima com useState
            onChange={event => setName(event.target.value)}
            
          />
          <input 
            type="email" 
            placeholder="E-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <input 
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={event => setWhatsapp(event.target.value)}
          />

          <div className="input-group">
            <input 
              placeholder="Cidade"
              value={city}
              onChange={event => setCity(event.target.value)}
            />
            <input 
              placeholder="UF" 
              style={{ width:80 }}
              value={uf}
              onChange={event => setUf(event.target.value)}
            />
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}