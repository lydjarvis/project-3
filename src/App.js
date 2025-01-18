import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ContactUs from './pages/ContactUs/ContactUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import TodoList from './components/TodoList/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return ( 
    <>
      <h1>TODO LIST PROJECT</h1>
      <Navbar />
      <TodoList />
      <BrowserRouter>
      <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
