import React from 'react';
import homeimage1 from "../../assets/img/carousel-1.jpg";
import homeimage2 from "../../assets/img/carousel-2.jpg";


const Imageshow = () => {
    return (
        <div className="home-slide">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img  className="d-block w-100" src={homeimage1} alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img  className="d-block w-100" src={homeimage2} alt="Second slide"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
}
export default Imageshow;