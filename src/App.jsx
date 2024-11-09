import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/common/navbar/Navbar';
import ItemListContainer from './pages/itemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/itemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <Router>
    <div className="App">
    <NavBar />
    <Routes>
    <Route path="/" element={<ItemListContainer />} />
    <Route path="/category/:categoryId" element={<ItemListContainer />} />
    <Route path="/item/:id" element={<ItemDetailContainer />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;