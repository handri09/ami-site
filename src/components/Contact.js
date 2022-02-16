import React from 'react'
import { Grid } from '@mui/material'

function Contact () {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
        <h1>Contact</h1>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} color='primary.dark' >
        <h2>Form</h2>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} color='secondary.dark' >
        <h2>picture</h2>
        <img src='./images/teams.JPG' style={{ width: '100%'}}/>
      </Grid>
    </Grid>
  );
}

export default Contact;