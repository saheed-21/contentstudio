import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import DialpadOutlinedIcon from '@mui/icons-material/DialpadOutlined';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

export default function BasicTextFields() {
  return (
    <div style={{
            
        marginLeft: '10px',
        marginRight: '10px',
        marginTop: '-40px',
        color: 'BLACK',
        padding: '100px',
        width: '390px',
        borderRadius: '30px'

    }}>
    <div>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <TextField
        
        id="demo-helper-text-aligned"
        label="First Name" style={{
            height:'0.2px',
            width:'500%',
        }}
      />
      <TextField
        
        id="demo-helper-text-aligned-no-helper"
        label="Last Name" style={{
            height:'0.2px',
            width:'500%',
        }}
      />
      <br>
      </br> 
    </Box>
    <Box>
    <TextField id="outlined-basic" type='email' label={<EmailOutlinedIcon/>} placeholder="Email Address"variant="outlined"  style={
        {
            height:'0.5px',
            marginTop:'75px',
            width:'96%',
        }
      }/>
    <TextField id="outlined-basic" type='password' label={<HttpsOutlinedIcon/>}  placeholder="Password" style={{
        height:'0.5px',
        marginTop:'75px',
        width:'96%',
      }} />
      <TextField id="outlined-basic" type='number' label={<DialpadOutlinedIcon/>}  placeholder="Mobile Number" style={{
        height:'0.5px',
        marginTop:'75px',
        width:'96%',
      }} />
      <p style={{
        marginTop:'80px',
      }}>By signing up,you agree to our terms of service <br></br>and privacy policy</p>
      <Link to='/Login' className='link'>
      <Button variant="contained" style={{
        
        width: '48ch',
        height:'50%',
        textAlign:'center',
        marginLeft:'1%',
        
      }}>Create Account</Button></Link>
      
    </Box>
    </div>
    </div>
  );
}
