import React, { useState } from "react";
import axios from "axios";
import '../styles/Footer.css';

import { useNavigate } from 'react-router-dom'

export default function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password1: "",
        password2: "",
    });

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
            const response = await axios.post("http://127.0.0.1:8000/api/register/", formData)
            console.log("Success!", response.data)
            setSuccessMessage("Registration Successful!")
            setTimeout(() => {
				navigate('/') 
			}, 1000)
        }
        catch (error) {
            console.log("Error during registration!", error.response?.data);
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
            <h2>Register:</h2>
            <form>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
                <label>username:</label>
                <br />
                <input
                    type="text"
                    name="username"
                    className="Username"
                    value={formData.username}
                    onChange={handleChange}
                ></input>{" "}
                <br />
                <br />
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
                    name="password1"
                    value={formData.password1}
                    onChange={handleChange}
                ></input>{" "}
                <br />
                <br />
                <label>confirm password:</label>
                <br />
                <input
                    type="password"
                    name="password2"
                    value={formData.password2}
                    onChange={handleChange}
                ></input>{" "}
                <br />
                <br />
                <button type="submit" disabled={isLoading} onClick={handleSubmit}>
                    Register
                </button>
                <div className="register-link">
                    <p>
                        Already have an account?
                        <a href="/login">
                            &nbsp;Login Now
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
}