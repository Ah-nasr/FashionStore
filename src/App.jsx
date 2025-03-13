import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar';
import SalesBot from './components/Bot';
import Footwear from './pages/Footwear';
import Login from './pages/Login';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/footwear" element={<Footwear/>} />
        <Route path="/shoes" element={<Footwear/>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <SalesBot />
    </div>
  );
}

export default App;