import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarMenu from './component/TodoList/NavbarMenu/NavbarMenu';
import TodoList from './component/TodoList/TodoList';
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
          <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
