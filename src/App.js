import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
<form action="http://172.16.39.29:9000/" method="get">      
   numero 1<input name="numero1"></input>
       numero 2<input name="numero2"></input>
       operacion<select name="opcion">
         <option>suma</option>
         <option>resta</option>
       </select>
       <button>aplicar</button>
       </form>

      </header>
    </div>
  );
}

export default App;
