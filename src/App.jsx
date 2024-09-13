import NavBar from './components/common/navbar/Navbar';
import ItemListContainer from './pages/itemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
    <NavBar />
    <ItemListContainer greeting="¡Bienvenido a Altas Zapas!" />
    </div>
  );
}

export default App;