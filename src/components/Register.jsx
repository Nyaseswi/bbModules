import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../initFirebase';
import {toast} from 'react-toastify'
const Register = () => {
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lastname, setLastname] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    // Handle register logic here
try {
 await createUserWithEmailAndPassword(auth, email, password)
  const userEmailPassword = auth.currentUser
  console.log(userEmailPassword)
  console.log('User registered successfully')
  toast.success('User Registered Successfully',{
    position:'top-center'
  })
} catch (error) {
  console.log(error.message)
  toast.success(error.message,{
    position:'top-center'
  })
}
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="firstname"> First name:</label>
          <input
            type="text"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname"> Last name:</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
