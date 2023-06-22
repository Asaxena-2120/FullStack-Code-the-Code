import React from "react";
import {Link } from 'react-router-dom';
import { Divider, Image , Icon} from 'semantic-ui-react';
function NavBar({isLoggedIn}){
    return (
        <div>
            <nav style = {{display:'block', flexDirection:'column'}}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                
    {isLoggedIn?<><Icon name='user' /><span>Username</span></>:<></>}
    
  
                
                </nav>
                <br></br>
                <br></br>
        </div>
    )
}

export default NavBar;