import './App.css';
import { 
  Container, Divider, Grid, Stack,
  Button, Avatar
 } from '@mui/material'
import { useState } from 'react'
import ImageList from './components/mui/ImageList'

export default function App() {
  const [home, setHome] = useState(true)
  const [about, setAbout] = useState(false)
  const [projects, setProjects] = useState(false)
  const [teams, setTeams] = useState(false)
  const [contact, setContact] = useState(false)
  const onClear = () => {
    setHome(false)
    setAbout(false)
    setProjects(false)
    setTeams(false)
    setContact(false)
    return true
  }
  return (
    <Container maxWidth='xxl' sx={{ textAlign: 'center' }}>
      <Nav 
        home={()=>{ 
          onClear()
          setHome(true)
        }}

        about={()=>{ onClear(); setAbout(true)}} 
        projects={()=>{onClear(); setProjects(true)}} 
        teams={()=>{ onClear(); setTeams(true)}}     
        contact={()=>{ onClear(); setContact(true)}} 
        />

      <Grid container className='grid'>
        {home ? <Home/> : ''}
        {about ? <About/> : ''}
        {projects ? <Projects/> : ''}
        {teams ? <Teams/> : ''}
        {contact ? <Contact/> : ''}
      </Grid>

    </Container>
  );
}

function Nav (props) {
  return(
    <Grid container className='nav' sx={{ textAlign: 'center', justifyContent: 'center' }}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ textAlign: 'center', justifyContent: 'center' }}>
        <Stack direction='row' divider={<Divider />} spacing={1} sx={{ textAlign: 'center', justifyContent: 'center', bgcolor: 'white' }} >
          <Grid item xs={1} sm={-1} md={0} lg={1} xl={1}>
            <Avatar alt='logo-ami' src='./logoAmi.png' />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={10} xl={10}>
            <Button size='medium' onClick={() => props.home()}>Home</Button>
            <Button size='medium' onClick={() => props.about()}>About</Button>
            <Button size='medium' onClick={() => props.projects()}>Projects</Button>
            <Button size='medium' onClick={() => props.teams()}>Teams</Button>
            <Button size='medium' onClick={() => props.contact()}>Contact</Button>
          </Grid>
          <Grid item container xs={12} sm={12} md={12} lg={1} xl={1} sx={{ textAlign: 'flex-end', justifyContent: 'flex-end'}}>
            <Grid item>
              <Avatar sx={{ border:1, borderColor: 'red'}}>Off</Avatar>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
}

function Home () {
  return (
    <div bgcolor='blue'>
      <h1>AMI</h1>
      <h6>ANKIZY MIVOATRA no IFANDRIMBONANA</h6>
      <p>AMI is a french word for 'FRIEND', we are carring children that are out of money to school and help them to finish school. </p>
      {/*<Avatar alt='logo-ami' src='./logoAmi.png' sx={{ width: 200, height:200, border:5, borderColor: 'green'}}/>*/}
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={10} ><img src='./images/home.jpg' style={{ }}/></Grid>
      </Grid>
    </div>
  );
}

function About () {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

function Projects () {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
        <h2>Projects</h2>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={8} md={10} lg={10} xl={10}>
          <h4><em>Actions</em></h4>
        </Grid>
        <Grid item xs={12} sm={4} md={2} lg={2} xl={2}>
          <img src='enf1.jpg' style={{ width: '100%', height: '100%'}}/>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={8} md={10} lg={10} xl={10}>
          <h4><em>Actions</em></h4>
        </Grid>
        <Grid item xs={12} sm={4} md={2} lg={2} xl={2}>
          <img src='1.jpg' style={{ width: '100%', height: '100%'}}/>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={8} md={10} lg={10} xl={10}>
          <h4><em>Actions</em></h4>
        </Grid>
        <Grid item xs={12} sm={4} md={2} lg={2} xl={2}>
          <img src='2.jpg' style={{ width: '100%', height: '100%'}}/>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={8} md={10} lg={10} xl={10}>
          <h4><em>Actions</em></h4>
        </Grid>
        <Grid item xs={12} sm={4} md={2} lg={2} xl={2}>
          <img src='3.jpg' style={{ width: '100%', height: '100%'}}/>
        </Grid>
      </Grid>
    </Grid>
  );
}

function Teams () {
  return (
    <div>
      <h1>Teams</h1>
      <ImageList />
    </div>
  );
}

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