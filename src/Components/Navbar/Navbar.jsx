import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return <>
            <nav className="navbar navbar-expand-lg px-5 navBg navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-3 fw-bold" to="/home">MovieTrend</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active fs-5 hoverScale" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fs-5  hoverScale" aria-current="page" to="/movies">Movies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fs-5 hoverScale" aria-current="page" to="/tv">Tv shows</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                            <li className="nav-item">
                               <i className='fa-brands m-3 fs-5 fa-facebook-f'></i>
                               <i className='fa-brands m-3 fs-5 fa-instagram'></i>
                               <i className='fa-brands m-3 fs-5 fa-spotify'></i>
                               <i className='fa-brands m-3 fs-5 fa-twitter'></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    ;
}
export default Navbar;
