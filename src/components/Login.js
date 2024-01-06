import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import wall from '../assets/images/wall4.png';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email: email,
        password: password,
      });

      console.log(response.data);

      // Redirect to the home page after successful login
      // Update '/account' with the actual path of your account page
      navigate('/');
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <body className='log'>
      <img src={wall} className='m7'></img>
      <div style={{
        marginLeft: '10px',
        marginRight: '10px',
        marginTop: '0px',
        color: 'BLACK',
        padding: '100px',
        width: '200px',
        borderRadius: '30px',
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '50px',
          width: '450px',
          height: '345px',
        }}>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 5, width: '35ch', height: '5px' },
              borderColor: 'white',
              width: '200px',
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              type='email'
              label={<EmailOutlinedIcon />}
              placeholder="Email Address"
              variant="outlined"
              style={{
                height: '0.2px',
                width: '170%',
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              type='password'
              label={<HttpsOutlinedIcon />}
              placeholder="Password"
              style={{
                height: '0.2px',
                width: '170%',
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Link to='' className='link'>
              <p>Forget Password?   </p>
            </Link>
            <Link to='/' className='link'>
              <Button
                variant="contained"
                style={{
                  width: '40ch',
                  height: '50%',
                  textAlign: 'center',
                  marginLeft: '-14%',
                }}
                onClick={handleSignIn}
              >
                Sign In
              </Button>
            </Link>
            <p>Don't have an account ? <Link to='/Signin'> Sign Up</Link></p>
          </Box>
        </div>
      </div>
    </body>
  );
}

export default Login;
