import { createStore } from 'redux'
import rootReducer from '../reducer'

import combineReducer from '../reducer'

const store = createStore(combineReducer)

export default store