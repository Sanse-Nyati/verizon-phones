import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";


const SingleProducts = () => {
    const {product} = useLocation().state || {};
    const img_url = "https://Sanse.pythonanywhere.com/static/images/"

    let [phone, setPhone] = useState("");
    let [loading, setLoading] = useState("")
    let [success, setSuccess] = useState("")
    let [error,setError] = useState("")

    const submitForm = async (e) =>{
        e.preventDefault();
        setLoading ("Processing Payment")
        setSuccess("")
        try {
            const data =new FormData();
            data.append("amount",product.product_cost)
            data.append("phone",phone)
            const response = await axios.post("https://Sanse.pythonanywhere.com/api/mpesa_payment", data)
            setLoading("")
            setSuccess(response.data.message)
        } catch (error) {
            setLoading("")
            setError(error.message)
        }
    }
    return ( 
        <div className="">
           <div className="row justify-content-center mt-3">
             <Navbar/>
             
            <div className="col-md-3 card shadow">
                <img src= {img_url + product.product_photo } alt="" />
            </div>
            <div className="col-md-3 card shadow">
                <h2> {product.product_name} </h2>
                <h3 className="text-warning">{product.product_cost}</h3>
                <p className="text-muted">{product.product_desc}</p>
                <b className="text-warning"> {loading} </b>
                <b className="text-danger"> {error} </b>
                <b className="text-success"> {success} </b>
                <form onSubmit={submitForm}>
                    <input type="number" className="form-control" placeholder="Enter The Amount"required readOnly value={product.product_cost} /> <br />
                    <input type="tel" className="form-control" placeholder="Enter Mpesa No 254xxxxxxxx" required value={phone} onChange={(e) =>setPhone(e.target.value)} /> <br />
                    <button className="btn btn-primary">Pay Now</button>
                </form>
            </div>
           </div>
           
        </div>
    );
    
}
 
export default SingleProducts;