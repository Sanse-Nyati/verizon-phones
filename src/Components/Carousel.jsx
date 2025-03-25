import { Link } from "react-router-dom";
const Carousel = () => {
    return ( 
        <section class="row">
      <div class="col-md-12">
          <div class="carousel slide" data-bs-ride="carousel" id="mycarousel">
              <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img src="images/Gadgets-Leo-Valentines-Deals-1400x467.jpg.webp" alt="" height="600px" class="d-block w-100"/>
                  </div>

                  <div class="carousel-item">
                    <img src="images/verizon0.webp" height="600px" alt="" class="d-block w-100"/>
                  </div>

                  <div class="carousel-item">
                      <img src="images/hq.jpg" alt="" height="600px" class="d-block w-100"/>
                      
                  </div>
                  <div class="carousel-caption bg-primary">
                    <h2>Special Offer</h2>
                    <p>Phones are available at affordable prices</p>
                    <button class="btn btn-danger">Buy Now</button>
                  </div>

              </div>
              <Link to="#mycarousel" class="carousel-control-prev" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bg-primary"></span>
              </Link>  

              <Link to="#mycarousel" class="carousel-control-next" data-bs-slide="next">
                  <span class="carousel-control-next-icon bg-primary"></span>
              </Link>

              <ol class="carousel-indicators">
                  <li data-bs-target="#mycarousel" data-bs-slide-to="0" class="active"></li>
                  <li data-bs-target="#mycarousel" data-bs-slide-to="1"></li>
                  <li data-bs-target="#mycarousel" data-bs-slide-to="2"></li>
              </ol>    
        </div>
      </div>
    </section>
     );
}
 
export default Carousel;