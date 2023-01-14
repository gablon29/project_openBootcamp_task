import logo from './logo.svg';
import './App.css';
import TasklistComponent from './components/container/task_list';
import GreetingStyle from './components/pure/forms/GreetingStyle';
import Father from './components/container/Father';
import PruebaApp from './components/PruebaUseRef';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/** COMPONENTE de listado de tarea */}
        {/* <TasklistComponent /> */}
        {/* <GreetingStyle /> */}
      {/* </header> */}
      {/* //* gestion de eventos */}
      <Father/>
      {/* //* Prueba del useRef */}
      {/* <PruebaApp/> */}
    </div>
    
  );
}

export default App;
