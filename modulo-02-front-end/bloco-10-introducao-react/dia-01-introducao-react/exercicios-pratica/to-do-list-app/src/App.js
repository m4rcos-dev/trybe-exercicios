import './App.css';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header-title'>Lista de Tarefas</h1>
    </header>
  )
}

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const arrTasks = ['Task1', 'Task2', 'Task3', 'Task4', 'Taske5']
  return (
    <main className='main'>
      <div className='task-app'>
        {
          Header()
        }
        <div className='task-container'>
          {arrTasks.map((task) => {
            return Task(task);
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
