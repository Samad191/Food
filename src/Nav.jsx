import React, { Component } from 'react'
import { Link,BrowserRouter  } from 'react-router-dom'

import { connect } from 'react-redux'


class Nav extends Component{

    render() {
        console.log(this.props)
        return(
            <div>   
                
                <nav>
                    
            <div className="nav-wrapper blue">
                
            <Link to='/' className="brand-logo" style={{marginLeft:'15px'}}  >XORD Food Services</Link>
            {/* <ul id="nav-mobile" className="right hide-on-med-and-down"> */}
            <ul id="nav-mobile" className="right ">
                
                <li><a href="/">Home</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/signin">Sign In</a></li>
                {this.props.signIn ? <li>Add</li>  : null}
                {/* <li><a href='/add'>Add</a></li> */}

                {/* <Link to='/'>Home </Link>
                <Link to='/register'>Register</Link>
                <Link to='/signin'>Sign In</Link> */}
                
            
            </ul>
            </div>
        </nav>
     
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps ) (Nav)