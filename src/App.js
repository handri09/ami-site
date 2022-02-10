import './App.css';
import { 
  Container, Divider, Grid, Stack,
  Button
 } from '@mui/material'
import { useState } from 'react'

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
    <Grid container className='nav'>
      <Grid item>
        <Stack direction='row' divider={<Divider />} spacing={1} >
          <Button onClick={() => props.home()}>Home</Button>
          <Button onClick={() => props.about()}>About</Button>
          <Button onClick={() => props.projects()}>Projects</Button>
          <Button onClick={() => props.teams()}>Teams</Button>
          <Button onClick={() => props.contact()}>Contact</Button>
        </Stack>
      </Grid>
      {/**
       * Grid item xs={12} sm={12} md={12} lg={12} xl={12}
       */}
    </Grid>
  );
}

function Home () {
  return (
    <div>
      <h1>Home</h1>
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
    <div>
      <h1>Projects</h1>
    </div>
  );
}

function Teams () {
  return (
    <div>
      <h1>Teams</h1>
    </div>
  );
}

function Contact () {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
}