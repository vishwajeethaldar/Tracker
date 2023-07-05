import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@mui/material';

const ResetPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform reset password logic here
    // ...

    // Clear the form field
    setEmail('');
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Reset Password</h2>
          <form onSubmit={handleResetPassword}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              Reset Password
            </Button>
          </form>
          <div className="mt-3">
            <Link to="/login">Go back to Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
