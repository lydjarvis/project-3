import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ContactUs from './pages/ContactUs/ContactUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return ( 
    <div>

      <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      </BrowserRouter>

      
    </div>
  )
}

export default App;
