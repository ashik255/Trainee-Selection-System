import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/user/login', {
        email,
        password,
      });

      const token = response.data.token;

      // Decode the token
      const decodedToken = jwtDecode(token);
      const role = decodedToken.roles[0].authority;
      const userEmail = decodedToken.sub;
      const userId = response.data.roleBasedId;
      const user = { role: role, userEmail: userEmail, id: userId };

      // Store user and role in local storage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      console.log('User:', user);

      // toast.success('Signin Successful');

      // Redirect to different routes based on role
      if (user && user.role === 'Admin') {
        navigate('/admin/dashboard');
      } else if (user && user.role === 'APPLICANT') {
        navigate('/trainer/dashboard');
      } else if (user && user.role === 'EVALUATOR') {
        navigate('/trainee/dashboard');
      }

      // Handle login success here.
      console.log('Login successful!');
      console.log('Response:', response.data);
    }
    catch (error) {
      if (error.response) {
        // The server responded with a status code other than 2xx
        setError(error.response.data.message);
        console.error('Server Error:', error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        setError('No response from the server');
        console.error('No response from the server');
      } else {
        // Something happened in setting up the request that triggered an error
        setError('An error occurred while sending the request');
        console.error('Request Error:', error.message);
      }
    }

    // catch (error) {
    //   setError('Invalid credentials. Please try again.');
    //   console.error(error);
    // }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: '30px' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            value={email}
            onChange={handleEmailChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            fullWidth
            required
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
          {error && (
            <Typography variant="body2" color="error" align="center" style={{ marginTop: '10px' }}>
              {error}
            </Typography>
          )}
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;

