import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import * as createLogger from 'redux-logger'
// import * as Reducer from './modules/reducers'
import {Counter} from './modules/components/counter/counter'


const devtool = window['__REDUX_DEVTOOLS_EXTENSION__'] || function(){} 

import {Action} from './modules/models'

function reducer(state={}, action: Action){

    return state
}

const middleware = process.env.NODE_ENV != 'production' ? [thunk, createLogger({ collapsed: true })] : [thunk]


const configStore = applyMiddleware(...middleware)(createStore)


const store = configStore(reducer)

// hot reloading
// if (typeof module !== "undefined" && module.hot) {
//     module.hot.accept("../reducers/RootReducer", () => {
//         store.replaceReducer(require("../reducers/RootReducer").RootReducer);
//     });
// }

ReactDOM.render(<Provider store={store}><Counter counter={0}/></Provider>, document.getElementById('container'))