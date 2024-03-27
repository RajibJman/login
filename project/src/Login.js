import React, { useState } from 'react';
import RegistrationPage from './registration'; 
import { useNavigate } from 'react-router-dom'; 
const LoginPage = () => {
  // State variables to store email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate=useNavigate();

  // Function to handle form submission

  const handleSubmit = (event) => {
    event.preventDefault();
    // Retrieve user data from local storag
  
    var remail=storedData[0].email;
     var rpassword=storedData[0].password;
    // Check if entered credentials match stored credentials
    if(storedData){
        if (email === remail && password === rpassword) {
            // Redirect user to a different page
            console.log("matched");
            alert('Password matched');

            navigate('/RegistrationPage');
            // eslint-disable-next-line no-restricted-globals
            // 
            
          //   history.push('/dashboard'); // Replace '/dashboard' with your desired route
          } else {
            alert('Invalid email or password. Please try again.');
          }
    }
   
  };



  return (
    <section className="vh-100" style={{ backgroundColor: '#508bfc' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center">

                <h3 className="mb-5">Sign in</h3>

                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="typeEmailX-2"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="typePasswordX-2"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required
                    />
                  </div>

                  {/* Checkbox */}
                  <div className="form-check d-flex justify-content-start mb-4">
                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                    <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                  </div>

                  <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                </form>

                <hr className="my-4" />

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
