import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCatogery from './pages/ShopCatogery';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';




function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCatogery catogery='men' />} />
          <Route path='/women' element={<ShopCatogery catogery='women' />} />
          <Route path='/kids' element={<ShopCatogery catogery='kids' />} />
          <Route path='/product' element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/Cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>

      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
