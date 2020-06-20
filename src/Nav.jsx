import React, { Component } from 'react'
import { Link  } from 'react-router-dom'


class Nav extends Component{

    render() {
        return(
            <div>     
                <nav>
            <div className="nav-wrapper blue">
                
            <Link to='/' className="brand-logo" style={{marginLeft:'15px'}}  >XORD Food Services</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="sass.html"></a></li>
                <li><a href="badges.html"></a></li>
                <li><a href="collapsible.html"></a></li>
            
            </ul>
            </div>
        </nav>
            </div>
        )
    }
}

export default Nav