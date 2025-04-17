import React from 'react';
import './Carousel.css'; // We'll add custom styles here

const Carousel = () => {
  return (
    <>
      {/* 🧊 Glassmorphism Navbar */}
      <nav className="glass-navbar navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">GadgetStore</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Carousel Section */}
      <section className="row mt-5 pt-4">
        <div className="col-sm-12">
          <div className="carousel slide" data-bs-ride="carousel" id="mycarousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="images/Gadgets-Leo-Valentines-Deals-1400x467.jpg.webp"
                  alt=""
                  height="600px"
                  className="d-block w-100"
                />
                <div className="carousel-caption bg-primary">
                  <h2>Special Offer</h2>
                  <p>Phones are available at affordable prices</p>
                  <button className="btn btn-danger">Buy Now</button>
                </div>
              </div>

              <div className="carousel-item">
                <img
                  src="images/verizon0.webp"
                  height="600px"
                  alt=""
                  className="d-block w-100"
                />
              </div>

              <div className="carousel-item">
                <img
                  src="images/hq.jpg"
                  alt=""
                  height="600px"
                  className="d-block w-100"
                />
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#mycarousel"
              role="button"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon bg-primary" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </a>

            <a
              className="carousel-control-next"
              href="#mycarousel"
              role="button"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon bg-primary" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </a>

            <ol className="carousel-indicators">
              <li data-bs-target="#mycarousel" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#mycarousel" data-bs-slide-to="1"></li>
              <li data-bs-target="#mycarousel" data-bs-slide-to="2"></li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
