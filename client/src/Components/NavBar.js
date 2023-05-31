import React from "react";
import {Link } from 'react-router-dom';
function NavBar(){
    return (
        <div>
            <nav style = {{display:'flex', flexDirection:'column'}}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                </nav>
        </div>
    )
}

export default NavBar;