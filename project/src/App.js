import logo from './logo.svg';
import { BrowserRouter,Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import LoginPage from './Login';
import RegistrationPage from './registration';
import PasswordResetForm from './passReset';



function App() {
  return (

    <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element={<RegistrationPage/>}/>
        <Route path="/passReset" element={<PasswordResetForm/>}/>

    </Routes>
    </BrowserRouter>

  );
}

export default App;
