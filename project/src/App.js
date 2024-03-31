import logo from './logo.svg';
import { BrowserRouter,Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import Login from './page/Login';
import RegistrationPage from './page/registration';
import PasswordResetForm from './page/passReset';
import Axlldata from './component/Alldata';
import Dashboard from './page/Dashboard';
import NAvbar from './component/NAvbar';
import Sidebar from './component/Sidebar';
import AddModule from './component/AddModule';
import Navbar from './component/NAvbar';
import AddUserModule from './component/AddUserModule';
=======
import LoginPage from './Login';
import RegistrationPage from './registration';
import PasswordResetForm from './passReset';
>>>>>>> ee9b51f910e5cbe7b5fdfd45d0041d917af97344



function App() {
  return (
    <BrowserRouter>
    {/* <NAvbar></NAvbar> */}
    <Routes>
      
<<<<<<< HEAD
        <Route path="/" element={<Login/>}/>
        
        <Route path="/register" element={<RegistrationPage/>}/>
        <Route path="/passReset" element={<PasswordResetForm/>}/>
        <Route path="/allUser" element={<Axlldata/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/sidebar" element={<Sidebar/>}/>
        <Route path="/addmodule" element={<AddModule/>}/>
        <Route path="/addusermodule" element={<AddUserModule/>}/>
=======
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element={<RegistrationPage/>}/>
        <Route path="/passReset" element={<PasswordResetForm/>}/>
>>>>>>> ee9b51f910e5cbe7b5fdfd45d0041d917af97344

    </Routes>
    </BrowserRouter>

  );
}

export default App;
