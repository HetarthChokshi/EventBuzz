import React, { useState } from "react";
import axios from "axios";
import '../styles/Login.css';

import { useNavigate } from "react-router-dom";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLoading) {
            return
        }

        setIsLoading(true);

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/login/", formData)
            console.log("Success!", response.data)
            setSuccessMessage("Login Successful!")
            localStorage.setItem("accessToken", response.data.tokens.access);
            localStorage.setItem("refreshToken", response.data.tokens.refresh)
            setTimeout(() => {
				navigate('/') 
			}, 1000)
        }
        catch (error) {
            console.log("Error during Login!", error.response?.data);
            if (error.response && error.response.data) {
                Object.keys(error.response.data).forEach(field => {
                    const errorMessages = error.response.data[field];
                    if (errorMessages && errorMessages.length > 0) {
                        setError(errorMessages[0]);
                    }
                })
            }
        }

    };

    return (
        <div>
            <h2>Login:</h2>
            <form>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
                <label>email:</label>
                <br />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                ></input>{" "}
                <br />
                <br />
                <label>password:</label>
                <br />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                ></input>{" "}

                <br />
                <br />
                <button type="submit" disabled={isLoading} onClick={handleSubmit}>
                    Login
                </button>
                <div className="register-link">
                    <p>
                        Dont have an account?
                        <a href="/register">
                            &nbsp;Register Now
                        </a>
                    </p>
                </div>
            </form>
        </div>
    )
}