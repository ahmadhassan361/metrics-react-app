import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate()
    return (
        <nav className="navbar navbar-expand-lg bg-secondary-custom">
            <div className="container-fluid px-4">
                <a className="navbar-brand text-danger fw-bold fs-3" href="#"><i className="fas fa-chart-line"></i> Metrics</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span> 
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-danger" aria-current="page" onClick={()=>{navigate('/dashboard')}}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-danger" aria-current="page" onClick={()=>{navigate('/reports')}}>Reports</a>
                        </li>
                        <li className="nav-item">
                            <h6 onClick={()=>{navigate('/settings')}} className="nav-link active text-danger" aria-current="page" >Settings</h6>
                        </li>

                    </ul>
                </div>
                <div className="nav-item dropdown dropstart">
                    <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <div className="rounded-circle bg-danger text-secondary-custom d-flex justify-content-center align-items-center " style={{ 'width': '30px', 'height': '30px' }}>
                            <i class="fas fa-user"></i> 
                        </div>
                    </a>
                    <ul className="dropdown-menu bg-secondary-custom ">
                        <li>
                            <h6 onClick={()=>{navigate('/logout')}} className="dropdown-item text-danger">
                            Logout </h6></li>
                        
                    </ul>
                </div>
            </div>
        </nav>

    )
}
export default Header;