import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from 'react-bootstrap/Container';
import { useState } from "react";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import Catlist from "./components/Catlist";
import store from "./store.json"
import LoginForm from "./components/LoginForm";



  
function App() {
    const [cats, setCats] = useState(store);
    
    const featuredCats = cats.filter(cat => cat.featured === true);
   
   
  return(

    <Container>
      <Router>
        <div>
          <ButtonGroup>

            <Button variant="outline-secondary">
              <Link to="/">Home</Link>
            </Button>
            
            <Button variant="outline-secondary">
              <Link to="/avalable">Adoptable Cats</Link>
            </Button>

            <Button variant="outline-secondary">
              <Link to="/login">Login</Link>
            </Button>

          </ButtonGroup>
          <Routes>

            <Route index element={<Home/>} />
            
            <Route path='avalable' element={<Catlist/>}/>

            <Route path='login' element={<LoginForm/>}/>  

          </Routes>
        </div>
      </Router>
    </Container>
  )


}
export default App;
