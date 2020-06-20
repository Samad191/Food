import React, { Component} from 'react'
import Nav from '../Nav'

import { BrowserRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Footer from '../Footer/Footer'

import A from './download.jpeg'

import B from '../assets/1.jpeg'
import C from '../assets/2.jpeg'
import D from '../assets/4.jpeg'
import E from '../assets/5.jpeg'
import F from '../assets/6.jpeg'
import G from '../assets/7.jpeg'


import Cart from './Cart'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'

class DashBoard extends Component {

    state = 
    { 
        dish: '',
        button:['BBQ', 'Chinese','FastFood'],
        images:['A','B','C','D','E','F','G'],
        value:A
    }


    changeBackground = (e) => {
        e.target.style.color = 'yellow'
    }

    returnBackground = (e) => {
        e.target.style.color= 'orange'
    }


    compareDish = (e) => {

    }

    // onInput = (e) => {
    //     console.log(e.target.value)
    //     console.log(this.props)
    //     // this.props.map((prop) => {console.log('hello')} )
    //     this.props.rootReducer.map((root) => root.dishes.map((dish) => console.log(dish) ))
        
    // }

    onSearch = (e) => {
        this.setState({ search : e.target.value })
    }

    
    
    render() {
        const style={color: 'red'}
        
        return(
            <div>
                <Nav />
                
                <input onChange={(e) => this.onSearch(e)} />

            <div>
                <Link className='btn' to='/category/1' value={this.state.button[0]} > {this.state.button[0]} </Link>
                <Link className='btn' to='/category/2' value={this.state.button[1]} > {this.state.button[1]} </Link>
                <Link className='btn' to='/category/3' value={this.state.button[2]} > {this.state.button[2]} </Link>
                <div className='row' >

                    {/* {console.log(this.props.rootReducer)} */}
                
                {this.props.rootReducer.map((re) => {
                     
                    return (
                        
                    <div className='col s3' style={{padding:'15px'}} key={re.id} >
                        
                        <div className='card'  >
                            <div className='card-image' onClick={() => console.log(re.id) } >
{/*                             
                                <img src={A} /> */}

                                 <Link to={`dashboard/${re.id}`}  > <img src={re.image} style={{height:'150px', width:'290px'}} /> </Link> 
                                
{/* 
                                <span className='card-title'  > Title </span> */}
                            </div>
                            <div className='card-content' >
                                
                                <p> {re.name} </p>
                            </div>
                            <div className='card-action' >
                            <a href={re.link} target='_blank'  >Visit Site</a>
                                  
                            </div>
                        </div>
                </div>
                

                    )
                })}
                <br />
                </div>
                    </div>
                    <Footer />
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps) (DashBoard)