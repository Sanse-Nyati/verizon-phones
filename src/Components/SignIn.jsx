import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const SignIn = () => {
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")

    let [loading, setLoading] = useState("")
    let [error, setError] = useState("")

    let navigate = useNavigate()

    const submit = async(e) => {
        e.preventDefault();
        try {
            setError("")
            setLoading("Please Wait...")

            const data = new FormData()
            data.append("username", username)
            data.append("password",password)

            const response = await axios.post("https://Sanse.pythonanywhere.com/api/signin",data);
            if (response.data.user) {
                localStorage.setItem("user", JSON.stringify(response.data.user))
                navigate("/")
            }else {
                setLoading("")
                setError(response.data.message)
            }
        } catch (error) {
            setLoading("")
            setError("Something Went Wrong")
        }
    }
    return ( 
       <div className="row justify-content-center mt-4">
            <h1 className="b text-danger">Verizon Media</h1>
            <div className="col-md-6 card shadow p-4">
                <h2 className="text-primary">Sign In</h2>
                <b className="text-warning"> {loading} </b>
                <b className="text-danger"> {error} </b>
                <form onSubmit={submit}>
                    <input type="text" className="form-control" required placeholder="Enter UserName" value={username} onChange={(e) =>setUsername (e.target.value) }/> <br />
                    <input type="password" className="form-control" required placeholder="Enter PassWord" value={password} onChange={(e) =>setPassword(e.target.value)}/> <br />
                    <button className="btn btn-primary">SignIn</button>
                </form>
                <p>Don't Have An Account? <Link to="/signup" > SignUp </Link> </p>
            </div>
       </div>
     );
}
 
export default SignIn;
