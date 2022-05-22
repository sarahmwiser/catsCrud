import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { CatList } from "./components/Catlist";
import { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useRouteMatch,
  renderMatches
} from 'react-router-dom';
import { NewCatForm } from "./components/AddCat";



  
  
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
  

function Home(){
 
  return (
    <Card>
      <Card.Header><h1>Welcome to the Lazy Cat Sanctary</h1></Card.Header>
      <Card.Body><p>We would love for you to meet our furry friends and maybe take one home!</p></Card.Body>
        
    </Card>
)}


function NewCat(){
 
  return (
    <Card>
      <Card.Header><h1>Add A New Cat:</h1></Card.Header>
      <Card.Body><NewCatForm/></Card.Body>
    </Card>
)}

function AvailableCats(){

  return (
    <Card>
      <Card.Header><h1>List Of Avalable Cats:</h1></Card.Header>
      <Card.Body><CatList/></Card.Body>
    </Card>
)}
}}

export default App;
