import React from 'react';

import './global.css'
import Routes from './routes';


// quando importamos uma pasta, o React já procura o arquivo index da pasta 

function App() {
  

  return (
    <Routes />
  );
}

export default App;

// O componente é uma função que retorna um html 

// JSX é quando o HTML está integrado dentro do JavaScript

// Propriedades são semelhantes aos atributos do HTML e possuem a mesma sintaxe

// Criamos componentes novos sempre que teremos um código que irá repetir
// muitas vezes ou quando conseguimos isolar sem que ele faça diferença
// no restante da minha aplicação 


// Todos os componentes quando forem criados, precisam ter a primeira 
// letra maiúscula

// Estado = informação que será mantida pelo componente
// O estado é necessário no React para que o componente seja " atualizado "
// renderizando novamente 

// Para que o React tenha uma performace melhor, nunca podemos manipular o valor 
// do state, de uma forma direta, precisamos sobrepor o valor do state

// O useState retorna sempre um array com 2 posições 
// A primeira posição é o valor real da variável 
// A segunda posição é uma função de atualização 
// que consegue trocar o valor real da variável


//Toda vez que um componente precisa armazenar uma informação dentro dele 
//precisaremos criar uma variável com state
