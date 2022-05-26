import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from 'react-bootstrap/Container';
import { Component } from "react";
import AvailableCats from "./components/Avalable";
import NewCat from "./components/NewCat";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useRouteMatch,
  renderMatches
} from 'react-router-dom';



  
  
class App extends Component {
  render(){
   
  return(
    <Container>
      <Router>
        <div>
          <ButtonGroup>
            <Button variant="outline-secondary">
              <Link to="/">Home</Link>
            </Button>
            <Button variant="outline-secondary">
              <Link to="/addCat">Add Cat</Link>
            </Button>
            <Button variant="outline-secondary">
              <Link to="/about">Adoptable Cats</Link>
            </Button>
          </ButtonGroup>
          <Routes>
            <Route index element={<Home/>} />
            <Route path='addCat' element={<NewCat/>}/>  
            <Route path='about' element={<AvailableCats/>}/>
          </Routes>
        </div>
      </Router>
    </Container>
  )


}}

export default App;
