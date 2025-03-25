import axios from "axios";
import { useRef, useState } from "react";
import Navabar from "./Navbar";

const AddProducts = () => {
    let [products_name, setProductsName] = useState("")
    let [products_desc, setDesc] = useState("")
    let [products_cost, setCost] = useState("")
    let [products_photo, setPhoto] = useState("")
    let [loading, setLoading] =useState("")
    let [success, setSuccess] = useState("")
    let [error, setError] = useState("")
    
    const fileInputRef=useRef(null)
    const submit = async (e) => {
        e.preventDefault();
        try {
          setError("")
          setSuccess("")
          setLoading("Please wait...");
          const data =new FormData();
          data.append("product_name", products_name)
          data.append("product_desc", products_desc)
          data.append("product_cost", products_cost)
          data.append("product_photo", products_photo)

          const response = await axios.post("https://Sanse.pythonanywhere.com/api/addproducts", data)
          setLoading("")
          setSuccess(response.data.success)
          setProductsName("")
          setDesc("")
          setCost("")
          setPhoto("")
          fileInputRef.current.value = ""
        } catch (error) {
            setLoading("")
            setError(error.message)
        }
    }
    return ( 
        <div className="row justify-content-center mt-4">
             <Navabar />
            <div className="col-md-6 card shadow p-4">
            <h2>Add Product</h2>
            <b className="text-warninig"> {loading} </b>
            <b className="text-success"> {success} </b>
            <b className="text-danger"> {error} </b>

            <form onSubmit={submit}>
                <input type="text" className="form-control" placeholder="Enter Products Name" required onChange={(e) =>setProductsName(e.target.value)} value={products_name} />
                <br />
                <textarea name="" id="" placeholder="Enter Product Decsription" className="form-control" required onChange={(e) =>setDesc(e.target.value)} value={products_desc} ></textarea> <br />
                <input type="number" className="form-control" placeholder="Enter Product Cost" required onChange={(e) =>setCost(e.target.value)} value={products_cost} /> <br />
                <label htmlFor="">Product Photo</label>
                <input type="file" className="form-control" ref={fileInputRef} required onChange={(e) =>setPhoto(e.target.files[0])}  /> <br />
                <button className="btn btn-primary">Add Product</button>
            </form>
            </div>
        </div>
    );
}
 
export default AddProducts;
