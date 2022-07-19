// import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li className='box'>{value}</li>
  );
}

function App() {
  const arrToDoList = ['Hello, world! React', 'Componentes React', 'Projeto', 'Tarefa 4', 'Tarefa 5', 'etc...']
  return (
    <main className='main'>
      {arrToDoList.map((e, index) => {
        return(
          <ul key={index}>
            {index}: {Task(e)}
          </ul>
        )
      })}
    </main>
);
}

export default App;
