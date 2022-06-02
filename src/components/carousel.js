import HB from '../images/HB.jpeg'
import hb2 from '../images/hb2.jpeg'
import san from '../images/san.JPG'

//i wanted to have a carousel at the home screen but ran into some issues, will try again later.

export const Carousel = [
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {HB}
      alt="Second slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {hb2}
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {san}
      alt="Third slide"
    />

    <Carousel.Caption>
     </Carousel.Caption>
  </Carousel.Item>
</Carousel>]