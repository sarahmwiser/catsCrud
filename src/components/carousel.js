import HB from '../components/images/hb.jpeg';
import hb2 from '../components/images/hb2.jpeg';
import san from '../components/images/san.JPG';

export const Carousel = [
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {HB}
      alt="First slide"
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