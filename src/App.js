import logo from './logo.svg';
import './App.css';
import TodoList from './component/TodoList/TodoList';
import NavbarMenu from './component/TodoList/NavbarMenu/NavbarMenu';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return ( 
    <>
      <h1>TODO LIST PROJECT</h1>
      <NavbarMenu />
      <TodoList />
    </>
  );
}

export default App;
