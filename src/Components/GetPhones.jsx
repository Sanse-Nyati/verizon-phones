import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import Footer from "./Footer";

const GetProducts = () => {
    let [products,setProducts] = useState([])
    let [error, setError] = useState("")
    let [loading, setLoading] = useState("")
    let [FilterdProducts, setFiltrerdProducts] = useState([])
    // To navigate progammaticaly, we use useNavigate
    const navigate = useNavigate();

    const img_url ="https://Sanse.pythonanywhere.com/static/images/"

    const GetProducts = async () =>{
       setError("") 
       setLoading("Please Wait, recieving products...")
       try {
        const response = await axios.get("https://Sanse.pythonanywhere.com/api/getproducts")
        console.log(response)
        setProducts(response.data)
        setFiltrerdProducts(response.data)
        setLoading("")

       } catch (error) {
        setLoading("")
        setError(error.message)
       }
    };

    const handleSearch = (value) => {
      const filterd = products.filter((product) => 
      product.product_name.toLowerCase().includes(value.toLowerCase())
     );
     setFiltrerdProducts(filterd)
    };
//    useEffect(function, list of dependancies)
      useEffect(()=> {
        GetProducts();
      }, []);
    return ( 
       <div className="row">
        {/* Navbar Component */}
        <Navbar />
        <div class="text-container">
        
        <span style="--color:#ffffff; --delay: 1s">W</span>
        <span style="--color:#f80d0d; --delay: 1s">e</span>
        <span style="--color:#99eb15; --delay: 1s">l</span>
        <span style="--color:#106bf3; --delay: 1s">c</span>
        <span style="--color:#6e16a8; --delay: 1s">o</span>
        <span style="--color:#1bc29e; --delay: 1s">m</span>
        <span style="--color:#0ceafa; --delay: 1s">e</span>
        <span style="--color:#8af80d; --delay: 2s">T</span>
        <span style="--color:#240306; --delay: 2s">o</span>
        <span style="--color:#f509ae; --delay: 3s">V</span>
        <span style="--color:#f37272; --delay: 3s">e</span>
        <span style="--color:#1857b6; --delay:3s">r</span>
        <span style="--color:#9df70c; --delay: 3s">i</span>
        <span style="--color:#ffffff; --delay: 3s">z</span>
        <span style="--color:#fc0808; --delay: 3s">o</span>
        <span style="--color:#0c08fc; --delay: 3s">n</span>
        <span style="--color:#08fce7; --delay: 4s">P</span>
        <span style="--color:#f713136b; --delay: 4s">h</span>
        <span style="--color:#1100f8; --delay: 4s">o</span>
        <span style="--color:#3fff04; --delay: 4s">n</span>
        <span style="--color:#083c5f; --delay: 4s">e</span>
        <span style="--color:#7cf808; --delay: 4s">s</span>
        <span style="--color:#045afa; --delay: 5s">.</span>
        <span style="--color:#fa0000; --delay: 5s">.</span>
        <span style="--color:#fd02c7; --delay: 5s">.</span>
    </div>
        {/* The Carousel Component */}
        <Carousel />
        <h3 className="mt-5 text-primary">AVAILABLE PHONES</h3>
        <b className="text-warning"> {loading} </b>
        <b className="text-danger"> {error} </b>
        <div className="row justify-content-center my-4">
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Search Products By Name" onChange={(e) =>handleSearch(e.target.value)} />
          </div>
        </div>
        {FilterdProducts.map((product)=>(
              <div className="col-md-3 justify-content-center mb-4">
              <div className="card shadow card-margin">
                  <img src= {img_url + product.product_photo} alt="" className="product_image mt-4" />
                <div className="card-body">
                  <h5 className="mt-2"> {product.product_name} </h5>
                  <p className="text-muted"> {product.product_desc.slice(0, 10)} </p>
                  <b className="text-warning"> {product.product_cost} Kes</b>
                  <button className="btn btn-primary mt-2 w-100" onClick={()=>navigate("/singleproduct", {state: {product}})} >Buy Now</button>
                </div>  
              </div>
          </div>
        ) ) }
      
        {/* Footer Component*/}
        <Footer/>
       </div>
     );
}
export default GetProducts;
