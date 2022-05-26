import Card from 'react-bootstrap/Card';
/*import { Carousel } from './carousel';*/



function Home(){

    /*Home = async () =>{
        try {
            const pic = await fetch(Carousel);
        } catch (e) {
            console.log(e);
        }
    }*/
 
    return (
      <Card>
        <Card.Header><h1>Welcome to the Lazy Cat Sanctary</h1></Card.Header>
        <Card.Body><p>We would love for you to meet our furry friends and maybe take one home!</p></Card.Body>
          {/* wanted to add carousel here but something is wrong with my photos */ }
           
      </Card>
  )}

export default Home;