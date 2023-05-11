import logo from './logo.svg';
import './App.css';
//import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Home from './components/Home';
import Adminlogin from './components/Adminlogin';
import Login from './components/Login ';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
         <Route path='/Login' element={<Login />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Adminlogin' element={<Adminlogin />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;