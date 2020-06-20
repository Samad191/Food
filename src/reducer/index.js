import action from '../actions'
import { combineReducers } from 'redux'

import A from '../assets/1.jpeg'
import B from '../assets/2.jpeg'
import C from '../assets/4.jpeg'
import D from '../assets/5.jpeg'
import E from '../assets/6.jpeg'
import F from '../assets/7.jpeg'
import G from '../assets/8.jpeg'

let initState =  [
   
    { id:'1' , name:'Kababjees' , phone:'123',price:'Rs 100', address: 'Gulsan', image:A , dishes: ['Biryani', 'Zinger'], link:'http://kababjees.com/' },
    { id:'2' , name:'California Pizza' , phone:'456',price:'Rs 200', address: 'Defence', image:B, dishes: ['Chinese', 'Karahai'], link:'https://www.californiapizza.com.pk/'},
    { id:'3' , name:'PizzaHut' , phone:'789', price:'Rs 300', address: 'Jauhar', image:C, dishes: ['Biryani', 'Chinese'], link:'https://www.pizzahut.com.pk/'},
    { id:'4' , name:'BurgerLAB' , phone: '000' , price:'Rs 300',address: 'Clifton', image:D, dishes: ['BBQ', 'Zinger'], link:'https://burgerlab.com.pk/' },
    { id:'5' , name:'BurgerOClock' , phone:'123',price:'Rs 200', address: 'Gulsan', image:E, dishes: ['BBQ', 'Karahai'], link:'https://burgeroclock.com.pk/' },
    { id:'6' , name:'KFC' , phone:'456',price:'Rs 700', address: 'Defence', image:F,dishes: ['Biryani', 'Chinese'], link:'https://www.kfcpakistan.com/' },
    { id:'7' , name:'Hardees' , phone:'789', price:'Rs 400',address: 'Jauhar',image:G,  dishes: ['BBQ', 'Zinger'], link:'https://www.hardees.com/'}
]

let userState = [
    {name:'sf', id:'s'}
]


const rootReducer = (state = initState, action) => {
    switch(action.type) {
        // case 'ADD_USER':
        //     return {...state, name: action.payload}
        default: return state
    }
}

const addReducer = (state = userState, action) => {
    let a = action.payload
    switch(action.type) {
        case 'ADD_USER':
            return {...state, 
                name: a}
        default: return state
    }
}

export default combineReducers({
    rootReducer,
    addReducer
})