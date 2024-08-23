import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import './Signin.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/signup', { username, email, password });
            if (res.data.success) {
                console.log(res.data.message);
                alert('Sign-Up Successful');
                navigate('/Signin');
            } else {
                console.log(res.data.message);
                alert('Sign-Up Failed: ' + res.data.message);
            }
        } catch (err) {
            let errorMessage = 'Sign-Up Failed: ';
            if (err.response && err.response.data && err.response.data.message) {
                errorMessage += err.response.data.message;
            } else if (err.response && err.response.data) {
                errorMessage += JSON.stringify(err.response.data);
            } else if (err.request) {
                errorMessage += 'No response from server.';
            } else {
                errorMessage += err.message;
            }
            console.error('Error:', errorMessage);
            alert(errorMessage);
        }
    };
    

    return (
        <html>
            <body className='body'>
                <form onSubmit={handleSubmit} className='form'>
                    <p className='title'>Signup</p>
                    <input 
                        className='username'
                        type="text" 
                        placeholder="Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
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
                    <button className='button' type="submit">Sign Up</button>
                    <button 
                    type="button" 
                    className='link-button'
                    onClick={() => navigate('/Signin')}
                >
                    Already signed up? Sign in!
                </button>
                </form> 
            </body>
        </html>
    );
};

export default Signup;


