import {Container} from '@mui/material'
import {Routes, Route} from "react-router-dom";
import { Team, Home, Activities, Contact } from "./pages"
import {NavBar} from "./components"

function App() {
  return (
    <Container maxWidth='xxl' sx={{ textAlign: 'center' }}>
      <Routes>
        <Route path="/ami-site/" exact element={<Home/>} />
        <Route path="/ami-site/activities/" exact element={<Activities/>} />
        <Route path="/ami-site/contact" exact element={<Contact />} />
        <Route path="/ami-site/team" exact element={<Team />} />
      </Routes>
    </Container>
  );
}

export default App;