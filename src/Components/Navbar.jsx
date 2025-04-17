import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"; // Make sure you create and import this CSS file

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <section className="row">
      <div className="col-md-12">
        <div className="navbar navbar-expand-md glass-navbar">
          <Link to="/" className="navbar-brand">
            <img src="images/Verizon.png" alt="Logo" height="50px" />
          </Link>

          <button
            className="navbar-toggler"
            data-bs-target="#ivy"
            data-bs-toggle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="ivy">
            <div className="navbar-nav">
              <Link to="/" className="nav-link text-white">
                <img src="images/images (1).jpeg" alt="" height="20px" /> Home
              </Link>
              <Link to="/admin" className="nav-link text-white">
                ADMIN LOGIN
              </Link>
            </div>

            <div className="navbar-nav ms-auto">
              {user ? (
                <>
                  <b className="nav-link text-success">Hello {user.username}</b>
                  <button
                    className="nav-link btn btn-link text-white"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/signin" className="nav-link">
                    <img
                      src="images/login1.jpeg"
                      alt="Login"
                      height="50px"
                    />
                  </Link>
                  <Link to="/signup" className="nav-link">
                    <img
                      src="images/signup2.jpeg"
                      alt="Signup"
                      height="50px"
                    />
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
