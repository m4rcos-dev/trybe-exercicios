import React from "react";
import './Content.css'

class Content extends React.Component {
  render() {
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
    return (
      conteudos.map((content) => {
        return <div key={content.conteudo} className='content'>
          <p>O conteúdo é: {content.conteudo}</p>
          <p>Status: {content.status}</p>
          <p>Bloco: {content.bloco}</p>
        </div>
      })
    )
  }
}

export default Content;
