import { Button } from '../Button/Button';
import { ConditionalRendering } from '../ConditionalRendering';
import { List } from '../List';
import { TicTacToe } from '../Tic Tac Toe';
import { User } from '../User/User';
import './App.css';
import { Count } from './Count';

function App() {
  return (
    <div className="App">
      <h1>React doc - Inicio Rapido</h1>
      <hr />
      <TicTacToe />
      <hr />
      <Count />
      <Count />
      <hr />
      <List />
      <hr />
      <ConditionalRendering />
      <hr />
      <User />
      <hr />
      <h2>Crear y anidar Componentes</h2>
      <Button text="Prueba" className="btn-green" />
    </div>
  );
}

export default App;
