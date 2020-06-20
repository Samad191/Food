import React, { Component } from 'react'
import Nav from '../../Nav'
import { connect } from 'react-redux'

class Category extends Component {

    componentDidMount() {
        console.log(this.props)
        let id = this.props.match.params.id
    }

    render() {
        return (
            <div>
                <Nav />
            <h2>{this.props.match.params.id}</h2>
            {console.log(this.props)}
            {console.log(this.props.match.params.value)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps) (Category)