import * as React from 'react'
import { bindActionCreators } from 'redux'
const {connect} = require('react-redux')
import {RootState} from '../../models'

import { counterActions } from '../../actions/counter'


const s = require('./counter.css')


export interface RootProps extends RootState {
    actions?: typeof counterActions;
}



@connect(
    state => state,
    dispatch => ({
        actions: bindActionCreators(counterActions, dispatch) 
    })
)
class Counter extends React.Component<RootProps, void> {
    constructor(props: RootProps){
        super(props)
    }

    render() {
        const { actions, counter } = this.props;

        return (
            <div className={s.container}>
                <button onClick={actions.dec}>-</button>
                <span onDoubleClick={actions.reset}>{counter}</span>
                <button onClick={actions.inc}>+</button>
            </div>
        )
    }
}

export {Counter}

// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(counterActions, dispatch)
// });

// export  default connect(state => state, mapDispatchToProps)(Counter)
