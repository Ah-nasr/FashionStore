import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '../components/Navbar.css'

const Login = () => {
    return (
        <div className="login-container d-flex justify-content-center align-items-center" style={{marginTop:"200px"}}>
            <div className="col-md-8 col-lg-6">
                {/* Navbar Branding */}
                <div className="text-center mb-4" style={{ marginTop: "-6em" }}>
                    <div className="custom-navbar">
                        <div className="title-container">                          
                            <Link to="/" style={{fontSize: "1.7rem",color: "#dc3545",fontWeight: "bolder",margin: "0", textDecoration:"none"}}>
                                 The FASHION Store 
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Login Card */}
                <div className="card">
                    <div className="card-body">
                        <h3 className="text-center mb-4">Login</h3>
                        <form action="/">
                            <div className="form-group mb-3">
                                <label htmlFor="loginEmail">Email address</label>
                                <input type="email" className="form-control" id="loginEmail" placeholder="Enter email" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="loginPassword">Password</label>
                                <input type="password" className="form-control" id="loginPassword" placeholder="Password" />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-danger btn-block">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
