import {combineReducers} from 'redux'
import {CounterReducer} from './counter'

export default combineReducers({
    counter: CounterReducer
})