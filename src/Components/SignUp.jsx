import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'; // Import PhoneInput

import 'react-phone-number-input/style.css'; // Import styles for the phone input

const SignUp = () => {
    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [password, setPassword] = useState("");
    let [loading, setLoading] = useState("");
    let [success, setSuccess] = useState("");
    let [error, setError] = useState("");
    let [country, setCountry] = useState("US"); // Default country set to US

    const submit = async (e) => {
        e.preventDefault();
        try {
            setLoading("Please Wait...");
            setSuccess("");
            setError("");
            setUsername("");
            setPhone("");
            setEmail("");
            setPassword("");
            const data = new FormData();
            data.append("username", username);
            data.append("email", email);
            data.append("phone", phone);
            data.append("password", password);
            data.append("country", country); // Add country to the form data

            const response = await axios.post("https://Sanse.pythonanywhere.com/api/signup", data);
            setLoading("");
            setSuccess(response.data.message);
        } catch (error) {
            setLoading("");
            setError("Something Went Wrong");
        }
    };

    return (
        <div className="row justify-content-center mt-4">
            <h1 className="b text-danger">Verizon Media</h1>
            <b className="text-primary"> {loading} </b>
            <b className="text-success"> {success} </b>
            <b className="text-danger"> {error} </b>

            <div className="col-md-6 card shadow p-4">
                <h2 className="text-primary">Sign Up</h2>
                <form onSubmit={submit}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your UserName"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />

                    {/* Phone number input with country flag */}
                    <div className="form-group">
                        
                        <PhoneInput
                            placeholder="Enter Phone Number"
                            defaultCountry="US" // Default country (change this as needed)
                            value={phone}
                            onChange={setPhone}
                            international
                            className="form-control"
                        />
                    </div>

                    <br />
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Your PassWord"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button type="submit" className="btn btn-danger">
                        Sign Up
                    </button>
                </form>
                <p>
                    Already Have An Account? <Link to="/signin"> SignIn </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
