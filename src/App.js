import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from './component/TodoList/TodoList';
import NavbarMenu from './component/TodoList/NavbarMenu/NavbarMenu';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return ( 
    <>
      <h1>TODO LIST PROJECT</h1>
      <NavbarMenu />
      <TodoList />
      <BrowserRouter>
      <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
