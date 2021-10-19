import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import './login.css';
import icon from './../../img/logo/gmail.png';

const Login = () => {
    const { user, signInUsingGoogle } = UseAuth();
    const location = useLocation();
    console.log(location.state?.from);

    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="login-body d-flex justify-content-center align-items-center">
            <div class="text-center border rounded-3 p-5 bg-white">
                <h1 className="mb-5">Please Login</h1>

                <form onSubmit="" >
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
                <button onClick={handleGoogleLogin} className="btn bg-color mt-3 border"><img src={icon} alt="" height="30" /></button>

            </div>
        </div>
    );
};

export default Login;