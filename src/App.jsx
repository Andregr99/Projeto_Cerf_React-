import CartGenerator from './components/CardGernerator';
import Cards from './components/Cards';
import './styles/css/App.css'


function App() {
  return (
    <div className="App">
      <div className="intro">
        <h1 className="title"> Lista de afazeres</h1>
        <h3 className="subtitle">Coloque aqui as suas tarefas do dia para ter um melhor controle</h3>
        <CartGenerator />
        <Cards />        
      </div>
    </div>
  );
}

export default App;
