import {Routes, Route} from "react-router-dom";
import { Team, Home, Activities, Contact } from "./pages"
import {NavBar} from "./components"
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='ami-site/' element={<NavBar/>}>
          <Route index element={<Home/>} />
          <Route path="activities" element={<Activities/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="team" element={<Team />} />  
        </Route>
      </Routes>
    </>
  );
}

export default App;