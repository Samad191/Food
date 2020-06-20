import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHamburger } from '@fortawesome/free-solid-svg-icons'
 
import { faPersonBooth } from '@fortawesome/free-solid-svg-icons'
import Nav from '../Nav'

class SignIn extends Component {

  onSubmit = () => {}


    render() {
        return (
            <div>
              <Nav  />
                <h4 style={{marginLeft:'590px'}} >Sign In</h4>

            <div >
              <form class="col s12" style={{marginLeft:'500px'}} autoComplete='off' >
                <div class="row">
                  <div class="input-field col s5">
                  <i class="material-icons prefix">account_circle</i>
                    <input id="input_text" type="text" />
                    <label for="input_text">Name</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s5">
                  <i class="material-icons prefix">vpn_key</i>
                    <input id="input_text2" type="password"  />
                    <label for="input_text2">Password</label>
                  </div>
                </div>

              </form>
            </div>
                  
      {/* <FontAwesomeIcon icon={faPersonBooth} />   */}
  
  <a class="waves-effect waves-light btn" style={{marginLeft:'600px'}} >Submit</a>
            
            </div>
        )
    }
}

export default SignIn