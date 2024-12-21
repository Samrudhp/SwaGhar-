import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { TextField, Button, Paper, Typography, Container } from '@mui/material';
  import { useAuth } from '../contexts/AuthContext';
  import axios from 'axios';
  
  function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/api/auth/login', {
          email,
          password
        });
        login(response.data.token, response.data.userType);
        navigate('/dashboard');
      } catch (err) {
        setError(err.response?.data?.message || 'Login failed');
      }
    };
  
    return (
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
          <Typography component="h1" variant="h5" align="center">
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <Typography color="error" align="center">
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    );
  }
  
  export default Login;
  