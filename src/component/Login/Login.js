import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
    return (
        <div className="login-body d-flex justify-content-center align-items-center">
            <div class="text-center border rounded-3 p-5 bg-white">
                <h1 className="mb-5">Please Login</h1>

                <form action="" >
                    <div className="d-flex justify-content-center">
                        <div className="mb-3">
                            <div class="form-group">
                                <input class="form-control" type="text" placeholder="Email" />
                            </div><br />
                            <div class="form-group">
                                <input class="form-control" type="password" placeholder="Password" />
                            </div>
                            <br />
                            <div class="form-group">
                                <button class="btn btn-color w-100" type="submit">Login</button>
                            </div>
                        </div>
                    </div>

                </form>

                <p>New User? <Link to="/registration">Registration</Link></p>
                <div>-----------Login With-----------</div>
                <button className="btn bg-color mt-3 border"><i class="fa fa-google p-2 "></i></button>

            </div>
        </div>
    );
};

export default Login;