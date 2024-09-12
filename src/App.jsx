import { NavBar } from "./components/layouts/navbar/Navbar";
import { ItemListContainer } from "./pages/itemListContainer/ItemListContainer";
import { Main } from "./components/layouts/main/Main";
import { Footer } from "./components/layouts/footer/Footer";


function App() {
  console.log('App component is rendering');
  return (
    <div className="App">
    <NavBar />
    <ItemListContainer />
    <Main />
    <Footer />
    </div>
  )
}

export default App