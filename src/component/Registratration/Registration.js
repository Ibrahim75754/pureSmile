import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className="login-body d-flex justify-content-center align-items-center">
            <div class="text-center border rounded-3 p-5 bg-white">
                <h1 className="mb-5">Create An Account</h1>

                <form action="index.html">
                    <div className="d-flex justify-content-center">
                        <div className="mb-3">
                            <div class="form-group">
                                <input class="form-control" type="text" placeholder="Full Name" />
                            </div><br />
                            <div class="form-group">
                                <input class="form-control" type="text" placeholder="Email" />
                            </div><br />
                            <div class="form-group">
                                <input class="form-control" type="password" placeholder="Password" />
                            </div>
                            <br />
                            <div class="form-group">
                                <button class="btn btn-color w-100" type="submit">Registration</button>
                            </div>
                        </div>
                    </div>

                </form>

                <p>Already Have an Account? <Link to="/login">Login</Link></p>
                <div>---------Registration With---------</div>
                <button className="btn bg-color mt-3 border"><i class="fa fa-google p-2 "></i></button>

            </div>
        </div>
    );
};

export default Registration;