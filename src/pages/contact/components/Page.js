import React, { useState } from 'react'
import { Grid, Button  } from '@mui/material'
import TextField from '@mui/material/TextField';

function Contact () {
  const [name, setName] = useState('')
  return (
    <Grid container className='block'>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
        <TextField 
          fullWidth 
          label="First Name" 
          id="fullWidth" 
          onChange={(e) => setName(e.target.value)}
          style={{ width: '95%', margin:'1%' }}
          />
      </Grid>   
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
      <TextField 
          fullWidth 
          label="Last Name" 
          id="fullWidth" 
          onChange={(e) => setName(e.target.value)}
          style={{ width: '95%', margin:'1%' }}
          />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
        <TextField 
          fullWidth 
          label="Email" 
          id="fullWidth" 
          onChange={(e) => setName(e.target.value)}
          style={{ width: '95%', margin:'1%' }}
          />
      </Grid>      
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
        <TextField 
          fullWidth 
          label="Phone" 
          id="fullWidth" 
          onChange={(e) => setName(e.target.value)}
          style={{ width: '95%', margin:'1%' }}
          />
      </Grid>  
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
        <TextField 
          fullWidth 
          label="Message" 
          id="fullWidth" 
          onChange={(e) => setName(e.target.value)}
          style={{ width: '95%', margin:'1%', height: '40hv' }}
          />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
        <Button
          fullWidth 
          label="Message" 
          id="fullWidth" 
          variant='contained'
          onChange={(e) => setName(e.target.value)}
          style={{ width: '95%', margin:'1%', height: '40hv' }}
          > SUBMIT </Button>
      </Grid>
    </Grid>
  );
}

export default Contact;