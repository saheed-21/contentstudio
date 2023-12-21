import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import Button from '@mui/material/Button';
import'../assets/css/login.css'
import { Link } from 'react-router-dom';

export default function BasicTextFields() {
  return (
    <body className='log'>
    <div style={{

        marginLeft: '10px',
        marginRight: '10px',
        marginTop: '25px',
        color: 'BLACK',
        padding: '100px',
        width: '200px',
        borderRadius: '30px'

    }}>
    <div>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 5, width: '35ch',height: '5px' },
        

      }}
      noValidate
      autoComplete="off"
    >
        
      <TextField id="outlined-basic" type='email' label={<EmailOutlinedIcon/>} placeholder="Email Address"variant="outlined"  style={
        {
            height:'0.2px',
            width:'170%',
        }
      }/>
      <TextField id="outlined-basic" type='password' label={<HttpsOutlinedIcon/>}  placeholder="Password" style={{
        height:'0.2px',
        width:'170%',
      }} />
    
      <Link to=''>
      <p>Forget Password?   </p>
      </Link>
      <Link to='/' className='link'>
      <Button variant="contained" style={{
        
        width: '40ch',
        height:'50%',
        textAlign:'center',
        marginLeft:'-14%',
        
        
      }}>Sign In</Button></Link>

    </Box>
    </div>
    </div>
    </body>
  );
}
