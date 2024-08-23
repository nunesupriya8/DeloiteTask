import React, { useState } from 'react';
import axios from 'axios';
// import './Signup.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            console.log(res.data);
            alert('Login Successful');
        } catch (err) {
            console.error(err.response.data);
            alert('Login Failed');
        }
    };

    return (
        <html>
            <body className='body'>
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Sign In</h1>
                        <input 
                            className='email'
                            type="email" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <input 
                            className='password'
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <button type="submit">Login</button>
                </form>
            </body>
        </html>
    );
};

export default Login;
