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
        
        {/* The Carousel Component */}
        <Carousel />
        <h3 className="mt-5 text-primary">AVAILABLE PHONES</h3>
        <b className="text-warning"> {loading} </b>
        <b className="text-danger"> {error} </b>
        <div className="row justify-content-center my-4">
          <div className="col-sm-4">
            <input type="text" className="form-control" placeholder="Search Products By Name" onChange={(e) =>handleSearch(e.target.value)} />
          </div>
        </div>
        {FilterdProducts.map((product)=>(
              <div className="col-sm-3 justify-content-center mb-4">
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