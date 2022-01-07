import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sell from './components/Sell/Sell';
import ProductListing from './components/ProductListing/ProductListing';

function App() {
  return (
    <div className="app">
      <Header />


      <div className="all_sections">
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/product/:id" element={<ProductListing />} />
      </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
