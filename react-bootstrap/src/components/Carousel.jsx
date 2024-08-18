import house1 from '../assets/houses/h1.jpg'
import house2 from '../assets/houses/h2.jpg'
import house3 from '../assets/houses/h3.jpg'
const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={house1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={house2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={house3} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
