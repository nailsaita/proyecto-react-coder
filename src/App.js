import NavBar from "./components/NavBar/NavBar.js"
import "./App.css";
import logo from "./components/NavBar/Logo.jpg";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"
import SuperForm from "./components/SuperForm/SuperForm.js"
import ItemCount from "./components/ItemCount/ItemCount.js";


function App() {

function onAdd (counter){console.log(counter)}
  
  return (
    
    <div className="App">
    <NavBar/>

    <header className="App-header">
      <ItemListContainer titulo="Cerámica de Lu" subtitulo="Piezas únicas en cerámica"/>
      <ItemCount nombreProducto= "Sumá a tu carrito" stock = {10} initial = {1} onAdd={onAdd} />

        <img src={logo} className="App-logo" alt="logo" />
          <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

};

export default App;
