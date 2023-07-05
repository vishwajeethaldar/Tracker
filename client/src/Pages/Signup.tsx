import { SignUpForm } from '@/interface/user.ts';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';



const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState<SignUpForm>({
    email: '',
    name: '',
    password: '',
  });

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform signup logic here
    // ...

    // Clear the form fields
    setFormData({ email: '', name: '', password: '' });
  };

  return (
    <Container maxWidth="md">
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="h2" component="h2" gutterBottom>
            Sign Up
          </Typography>
          <form onSubmit={handleSignUp}>
            <TextField
              label="Name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>
          </form>
          <div className="mt-3">
            <Link to="/login">Already have an account? Log in</Link>
          </div>
          <div className="mt-3">
            <Button variant="outlined" color="primary" >
              Sign Up with Google
            </Button>
            <Button variant="outlined" color="secondary" className="me-2">
              Sign Up with GitHub
            </Button>
            <Button variant="outlined" color="info">
              Sign Up with Microsoft
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignupPage;
