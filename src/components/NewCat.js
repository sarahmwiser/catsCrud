import Card from 'react-bootstrap/Card';
import { AddCat } from './AddCat';


function NewCat(){
 
    return (
      <Card>
        <Card.Header><h1>Add A New Cat:</h1></Card.Header>
        <Card.Body><AddCat/></Card.Body>
      </Card>
  )}
  export default NewCat;