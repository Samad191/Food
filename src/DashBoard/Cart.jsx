import React, { Component } from 'react'
import A from './download.jpeg'

import { connect } from 'react-redux'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

class Cart extends Component {

    constructor(props) {
        super(props);

        this.state = { totalAmount: 100 }
    }

    
    render() {
      
      console.log(this.props.price)
        return (
            <div style={{marginLeft:'200px',padding:'20px'}} >
            <div class="row">
            <div class="col s12 m10">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title ">Cart</span>
                  <i class="material-icons ">shopping_cart</i>


                  
                   <div> {this.props.food.map((foo)=> 
                        <div>
                            <p> {foo} </p>   
                          </div>     
                    )} </div>

                </div> 
                <div class="card-action">
                  <a href="#">This is a link</a>
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </div>
          </div>

        )
    }
}

export default Cart