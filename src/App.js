// import './App.css';
import {Container} from '@mui/material'
import { Team, Home } from "./pages"

// About
import About from './components/About'
// import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Teams from './components/Teams'
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <Container maxWidth='lg' sx={{ textAlign: 'center' }}>
      <Routes>
        <Route path="/ami-site/" exact element={<Home/>} />
        <Route path="/ami-site/activities/" exact element={<Projects/>} />
        <Route path="/ami-site/contact" exact element={<Contact />} />
        <Route path="/ami-site/team" exact element={<Team />} />
      </Routes>
    </Container>
  );
}

export default App;