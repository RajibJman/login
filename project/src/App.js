import logo from './logo.svg';
import { BrowserRouter,Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import LoginPage from './Login';
import RegistrationPage from './registration';


function App() {
  return (

    <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/RegistrationPage" element={<RegistrationPage/>}/>

    </Routes>
    </BrowserRouter>

  );
}

export default App;
