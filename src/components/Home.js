import React from 'react';
import { Grid } from '@mui/material'

function Home () {
  return (
    <Grid container sx={{ width: '80%'}}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} ><img src='./images/home.jpg' style={{ width:'100%' }}/></Grid>
    </Grid>
  );
}

export default Home;