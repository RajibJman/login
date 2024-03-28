import React, { useState } from 'react';
import axios from 'axios';

const RegistrationPage = () => {
  // State variables to store input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [role, setRole] = useState('');

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform basic validation checks
    if (!name || !email || !password || !repeatPassword || !role) {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== repeatPassword) {
        alert('Passwords do not match.');
        return;
    }

    try {
        // Retrieve the token from localStorage
        const token = localStorage.getItem('token');

        // Check if token exists
        if (!token) {
            alert('Token not found in localStorage. Please log in again.');
            // Redirect the user to the login page or handle the scenario accordingly
            return;
        }

        // Send a POST request to register the user with the token
        await axios.post('http://localhost:3000/api/auth/register', { name, email, password, role }, {
            headers: {
                Authorization: `Bearer ${token}` // Pass the token in the Authorization header
            }
        });

        alert('Registration successful!'); // Show success message
        // Redirect user to login page or dashboard page
        // window.location.href = '/login'; // Example redirect to login page
    } catch (error) {
        console.error('Registration failed:', error.response ? error.response.data : error);
        alert('Registration failed. Please try again later.');
    }
};



  return (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                    <form onSubmit={handleSubmit} className="mx-1 mx-md-4">

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                          <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                          <label className="form-label" htmlFor="form3Example4c">Password</label>
                        </div>
                      </div>


                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4cd"
                            className="form-control"
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                            required
                          />
                          <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                        </div>
                      </div>



                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                          />
                          <label className="form-label" htmlFor="form3Example1c">Role</label>
                        </div>
                      </div>



                      <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                        <label className="form-check-label" htmlFor="form2Example3">
                          I agree all statements in <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">Register</button>
                      </div>

                    </form>

                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid" alt="Sample image" />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
