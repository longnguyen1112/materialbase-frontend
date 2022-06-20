import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () =>
{
    return(
        <div className="Header">   
            <nav className="navbar navbar-expand navbar-dark bg-dark">
				<a href="/" className="navbar-brand"> MaterialsBase</a>
				<div className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link to={"/compounds"} className="nav-link">Compounds</Link>
					</li>
					<li className="nav-item">
						<Link to={"/add"} className="nav-link">Add</Link>
					</li>
				</div>
			</nav>
        </div>
    );
};

export default Header;
