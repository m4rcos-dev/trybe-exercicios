import React from "react";
import './Content.css'

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Content extends React.Component {
    render(){
	return(
           conteudos.map((e, index) => {
	return(
          <div key={index} className='content'>
              <><p>O Conteúdo é: {e.conteudo}</p><p>Status: {e.status}</p><p>Bloco: {e.bloco}</p></>
          </div>
        );
      })
    );
  }
}

export default Content;