import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <section className="row">
        <div className="col-md-12">
            <div className="navbar navbar-expand-md navbar-light bg-light">
                <Link to="/" className="navbar-brand"><img src="images/Verizon.png" alt="" height="50px"/></Link >
                <button className="navbar-toggler" data-bs-target="#ivy" data-bs-toggle="collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="ivy">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link"> <img src="images/images (1).jpeg" alt="" height="20px"/>Home </Link >
                        <Link to="/addproducts" className="nav-link">Add Products</Link >
                        

                    </div>
                    <div className="navbar-nav ms-auto">
                        <Link to="/signin" className="nav-link"> <img src="images/login1.jpeg" alt="" height="50px"/> </Link >
                        <Link to="/signup" className="nav-link"> <img src="images/signup2.jpeg" alt="" height="50px"/> </Link >
                    </div>
                </div>
            </div>
        </div>
    </section>
     );
}
 
export default Navbar;