import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import ListUser from './User/ListUser';
import DetailUser from './User/DetailUser';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />


        
            <Routes>
              
              <Route path="/" element={<Home />} />
              <Route path="/Todo" element={<ListTodo />} />
              <Route path="/My" element={<MyComponent />} />
              <Route path="/User" element={<ListUser />} />
              <Route path="/User/:id" element={<DetailUser />} />
      
              
            </Routes>
    




        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
      </div>
    </BrowserRouter>
  );
}

export default App;
