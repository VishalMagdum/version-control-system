
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/User/Login';
//import axios from 'axios';
import Signup from './components/User/Signup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import FileSystem from './components/Home/FileSystem';
// import dotenv from 'dotenv'
// dotenv.config({ path: '../config.env' })
function App() {
  console.log(process.env.REACT_APP_BACKEND_URL)
  console.log(process.env.NODE_ENV)
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/home' element={<Home />} >
          <Route exact path='files' element={<FileSystem />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
