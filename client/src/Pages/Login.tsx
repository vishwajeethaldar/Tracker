import { userCred } from '@/interface/user.ts';
import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Card, CardContent, Typography, TextField, Button } from '@mui/material';

const LoginPage: React.FC = () => {
  const [userCred, setUserCred] = useState<userCred>({username: '', password: ''});
  const [errorMessage, setErrorMessage] = useState('');

  
  const updateCredentials = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserCred({ ...userCred, [name]: value });
  }
  const validateUsername = (username: string) => {
    // Use regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(username);
  };

  const validatePassword = (password: string) => {
    // Use regular expression to validate password format
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@#$%^&+=]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation check
    const validUsername = validateUsername(userCred.username);
    const validPassword = validatePassword(userCred.password);

    if (!validUsername || !validPassword) {
      setErrorMessage('Invalid username or password.');
      return;
    }

    // Perform login logic here
    // ...

    // Clear the form fields
    setUserCred({username: '', password: ''});

    setErrorMessage('');
  };

  return (
    <Container maxWidth="md">
      <Grid container justifyContent="center">
        <Grid item xs={12} lg={6}>
          <Card variant="outlined" style={{ marginTop: '5px' }}>
            <CardContent>
              <Typography variant="h2" component="h2" align="center" gutterBottom>
                Login
              </Typography>
              {errorMessage && (
                <div className="alert alert-danger">{errorMessage}</div>
              )}
              <form onSubmit={handleLogin}>
                <TextField
                  label="Username (Email)"
                  type="email"
                  name="username"
                  value={userCred.username}
                  placeholder="Username"
                  onChange={updateCredentials}
                  required
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Password"
                  type="password"
                  name="password"
                  value={userCred.password}
                  placeholder="Password"
                  onChange={updateCredentials}
                  required
                  fullWidth
                  margin="normal"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ marginTop: '16px' }}
                >
                  Log In
                </Button>
              </form>
              <div className="text-center mt-3">
                <Link to="/reset-password">Reset Password</Link>
                <span className="mx-2">|</span>
                <Link to="/signup">Sign Up</Link>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
