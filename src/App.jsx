import CartGenerator from './components/CardGernerator';
import './styles/css/App.css'


function App() {
  return (
    <div className="App">
      <div className="intro">
        <h1 className="title"> Lista de afazeres</h1>
        <h3 className="subtitle">Coloque aqui as suas tarefas do dia para ter um melhor controle</h3>
        <CartGenerator />   
      </div>
    </div>
  );
}

export default App;
