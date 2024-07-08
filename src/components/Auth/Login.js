import React, { useState } from 'react';
import { login } from '../../services/AuthService'; // assuming your login function is in authService.js

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            const token = await login(email, password);
            if (token) {
                // Redirect to dashboard or another page
                window.location.href = '/dashboard'; // replace with your actual path
            }
        } catch (error) {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="container-fluid pt-5">
            <div className="row h-100 align-items-center justify-content-center" style={{ "min-height": "100vh;" }}>
                <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4 ">
                    <div className="bg-secondary-custom rounded p-4 p-sm-5 my-4 mx-3">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h3 className="text-danger"><i className="fas fa-chart-line"></i> Metrics</h3>
                            <h3 className='text-danger'>Sign In</h3>
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label text-danger" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <a href="">Forgot Password</a>
                            </div>
                            <button type="submit" className="btn btn-danger py-3 w-100 mb-4">Sign In</button>
                        </form>
                        <p className="text-center text-danger mb-0">Don't have an Account? <a href="">Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}