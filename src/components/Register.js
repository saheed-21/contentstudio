import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import DialpadOutlinedIcon from '@mui/icons-material/DialpadOutlined';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('YOUR_API_ENDPOINT/signup', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        mobileNumber: mobileNumber,
      });

      // Handle the response as needed, e.g., redirect or show success message
      console.log(response.data);
    } catch (error) {
      // Handle errors, e.g., show an error message to the user
      console.error('Error signing up:', error.response.data);
    }
  };

  return (
    <div className='log'>
      <div style={{
        marginLeft: '10px',
        marginRight: '10px',
        marginTop: '0px',
        color: 'BLACK',
        padding: '100px',
        width: '390px',
        borderRadius: '30px',
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          width: '450px',
          height: '450px',
          marginTop: '-80px',
          padding: '20px',
        }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '15px',
            }}
          >
            <TextField
              name="firstName"
              label="First Name"
              variant="outlined"
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              name="lastName"
              label="Last Name"
              variant="outlined"
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Box>

          <Box>
            <TextField
              name="email"
              type='email'
              label={<EmailOutlinedIcon />}
              placeholder="Email Address"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              name="password"
              type='password'
              label={<HttpsOutlinedIcon />}
              placeholder="Password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              name="mobileNumber"
              type='number'
              label={<DialpadOutlinedIcon />}
              placeholder="Mobile Number"
              variant="outlined"
              fullWidth
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <p style={{
              marginTop: '20px',
            }}>By signing up, you agree to our terms of service <br></br>and privacy policy</p>
            <Link to='/Login' className='link'>
              <Button
                variant="contained"
                onClick={handleSignUp}
                style={{
                  width: '100%',
                  marginTop: '15px',
                }}
              >
                Create Account
              </Button>
            </Link>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Register;
