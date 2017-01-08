import { RootState, Action } from "../models";
import {ActionTypes} from '../constants'

export function CounterReducer(state: RootState, action: Action): RootState {
    switch (action.type) {
        case ActionTypes.INCREASE_COUNTER:
            return { counter: state.counter + 1 };
        case ActionTypes.DECREASE_COUNTER:
            return { counter: state.counter - 1 };
        case ActionTypes.RESET_COUNTER:
            return { counter: 0 };
    }

    return state || { counter: 0 };
}

