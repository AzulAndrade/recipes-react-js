import React, { Fragment } from "react";
import "../style.css";
 


const Carousel = () => {
  return (
    <Fragment>
      {/* <div id="preloader">
        <i className="circle-preloader"></i>
        <img src="img/core-img/salad.png" alt=""></img>
      </div> */}
      <div>
        <div className="hero-area">
            <div className="hero-slides">
              <div className="single-hero-slide bg-img">
                <div className="container h-100">
                  <div className="row h-100 align-items-center">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                      <div
                        className="hero-slides-content"
                        data-animation="fadeInUp"
                        data-delay="100ms"
                      >
                        <p data-animation="fadeInUp" data-delay="700ms">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cras tristique nisl vitae luctus sollicitudin.
                          Fusce consectetur sem eget dui tristique, ac posuere
                          arcu varius.
                        </p>
                        <a
                          href="#"
                          className="btn delicious-btn"
                          data-animation="fadeInUp"
                          data-delay="1000ms"
                        >
                          See recipe
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-hero-slide bg-img">
                <div className="container h-100">
                  <div className="row h-100 align-items-center">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                      <div
                        className="hero-slides-content"
                        data-animation="fadeInUp"
                        data-delay="100ms"
                      >
                        <h2 data-animation="fadeInUp" data-delay="300ms">
                          Delicios Homemade Burger
                        </h2>
                        <p data-animation="fadeInUp" data-delay="700ms">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cras tristique nisl vitae luctus sollicitudin.
                          Fusce consectetur sem eget dui tristique, ac posuere
                          arcu varius.
                        </p>
                        <a
                          href="#"
                          className="btn delicious-btn"
                          data-animation="fadeInUp"
                          data-delay="1000ms"
                        >
                          See recipe
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-hero-slide bg-img">
                <div className="container h-100">
                  <div className="row h-100 align-items-center">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                      <div
                        className="hero-slides-content"
                        data-animation="fadeInUp"
                        data-delay="100ms"
                      >
                        <h2 data-animation="fadeInUp" data-delay="300ms">
                          Delicios Homemade Burger
                        </h2>
                        <p data-animation="fadeInUp" data-delay="700ms">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cras tristique nisl vitae luctus sollicitudin.
                          Fusce consectetur sem eget dui tristique, ac posuere
                          arcu varius.
                        </p>
                        <a
                          href="#"
                          className="btn delicious-btn"
                          data-animation="fadeInUp"
                          data-delay="1000ms"
                        >
                          See recipe
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Carousel;
