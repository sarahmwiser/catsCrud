/*import { Carousel } from './carousel';*/
import HB from '../images/HB.jpeg'



function Home(props){

    /*Home = async () =>{
        try {
            const pic = await fetch(Carousel);
        } catch (e) {
            console.log(e);
        }
    }*/
 
    return (
       <div className='container'>
            <h1>Welcome to the Lazy Cat Sanctary!</h1>
                <div className='row'>
                    <p>This is our cat sanctary database. Please use this site to update the available cats at Lazy Cat.
                        Our goal is to give every cat a loving forever home. 



                    </p>
                        <img src={HB}/>
               </div>
        </div> 
  )}

export default Home;