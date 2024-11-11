import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/common/navbar/Navbar';
import ItemListContainer from './pages/itemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/itemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <Router>
    <CartProvider>
    <div className="App">
    <NavBar />
    <Routes>
    <Route path="/" element={<ItemListContainer />} />
    <Route path="/category/:categoryId" element={<ItemListContainer />} />
    <Route path="/item/:id" element={<ItemDetailContainer />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    </Routes>
    </div>
    </CartProvider>
    </Router>
  );
}

export default App;