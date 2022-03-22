import './App.css';
import { 
  Container, Divider, Grid, Stack,
  Button, Avatar
 } from '@mui/material'
import { useState } from 'react'

// About
import About from './components/About'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Teams from './components/Teams'

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
    <Container maxWidth='lg' sx={{ textAlign: 'center' }}>
      <Nav 
        home={()=> { onClear(); setHome(true) }}
        about={() => { onClear(); setAbout(true)}} 
        projects={() => {onClear(); setProjects(true)}} 
        teams={() => { onClear(); setTeams(true)}}     
        contact={() => { onClear(); setContact(true)}} 
        isHome={home}
        isProjects={projects}
        isTeams={teams}
        isContact={contact}
        />

      {home ? <Home/> : ''}
      {projects ? <Projects/> : ''}
      {teams ? <Teams/> : ''}
      {contact ? <Contact/> : ''}

    </Container>
  );
}

function Nav (props) {
  return(
    <Grid container className='nav' sx={{ textAlign: 'center', justifyContent: 'center' }}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ textAlign: 'center', justifyContent: 'center' }}>
        <Stack direction='row' divider={<Divider />} spacing={1} sx={{ textAlign: 'center', justifyContent: 'center', bgcolor: 'white' }} >
          <Grid item xs={12} sm={12} md={12} lg={10} xl={10}>
            <Button size='small' variant={props.isHome && 'outlined'} onClick={() => props.home()}>Home</Button>
            <Button size='small' variant={props.isProjects && 'outlined'} onClick={() => props.projects()}>Activities</Button>
            <Button size='small' variant={props.isTeams && 'outlined'} onClick={() => props.teams()}>Teams</Button>
            <Button size='small' variant={props.isContact && 'outlined'} onClick={() => props.contact()}>Contact</Button>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
}


