import {Routes, Route} from "react-router-dom";
import { Team, Home, Activities, Contact, NoMatch } from "./pages"
import {NavBar} from "./components"

function App() {
  return (
    <>
      <Routes>
        <Route path='ami-site/' element={<NavBar/>}>
          <Route index element={<Home/>} />
          <Route path="activities" element={<Activities/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="team" element={<Team />} />  
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;