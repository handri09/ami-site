import React from 'react'
import { 
  Container, Divider, Grid, Stack,
  Button, Avatar } from '@mui/material'

function About () {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={3} >
        <item>
            <h3>AMI Teams</h3>
            <img alt='teams' src='./bg.jpg' style={{ width:'100%', border:'green', borderRadius:'5px'}}></img>
        </item>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={3} >
        <item>
            <h3>AMI Teams</h3>
            <img alt='teams' src='./bg.jpg' style={{ width:'100%', border:'green', borderRadius:'5px'}}></img>
        </item>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={3} >
        <item>
            <h3>AMI Teams</h3>
            <img alt='teams' src='./bg.jpg' style={{ width:'100%', border:'green', borderRadius:'5px'}}></img>
        </item>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={3} >
        <item>
            <h3>AMI Teams</h3>
            <img alt='teams' src='./bg.jpg' style={{ width:'100%', border:'green', borderRadius:'5px'}}></img>
        </item>
      </Grid>
    </Grid>
  );
}

export default About