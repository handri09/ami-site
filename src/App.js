import './App.css';
import { 
  Container, Divider, Grid, Stack,
  Button
 } from '@mui/material'

export default function App() {
  return (
    <Container maxWidth='xxl' sx={{ textAlign: 'center' }}>
      <Nav />
    </Container>
  );
}

function Nav () {
  return(
    <Grid container className='nav'>
      <Stack direction='row' divider={<Divider />} spacing={1} >
        <Button>Home</Button>
        <Button>About</Button>
        <Button>Projects</Button>
        <Button>Teams</Button>
        <Button>Contact</Button>
      </Stack>
      {/**
       * Grid item xs={12} sm={12} md={12} lg={12} xl={12}
       */}
    </Grid>
  );
}