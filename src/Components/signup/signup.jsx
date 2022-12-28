import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Login/Login.css";
import { useNavigate } from 'react-router-dom';
function Signup() {
    const nevigate=useNavigate();
    const login=()=>{
        let path="/";
        nevigate(path);
      }
    return (
        <div className="container-fluid">
            <div className="sigin-wrap">
                <div className="pad-content">
                    <h2 className="text-center mb-3">Sign Up</h2>
                    <form>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                id="exampleInputEmail1"
                                aria-describedby="name"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email Address"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                placeholder="Password"
                                className="form-control"
                                id="exampleInputPassword1"
                            />
                        </div>

                        <button type="submit" className="btn mb-3" id="signin-btn">
                            Sign Up
                        </button>
                        <button type="submit" className="btn mb-3 clr" id="signin-btn">
                        Sign up With Google
                        </button>
                        <div className="text-center">
                            <span>Already have an account? <a onClick={()=>login()} href="">Login</a></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup