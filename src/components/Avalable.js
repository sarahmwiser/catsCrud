import { CatList } from "./Catlist";
import Card from 'react-bootstrap/Card';



function AvailableCats(){

    return (
      <Card>
        <Card.Header><h1>List Of Avalable Cats:</h1></Card.Header>
        <Card.Body><CatList/></Card.Body>
      </Card>
  )}
export default AvailableCats;
