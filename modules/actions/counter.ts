import {ActionTypes} from "../constants";

export const counterActions = {
    inc() {
        return {
            type: ActionTypes.INCREASE_COUNTER
        }
    },
    dec() {
        return {
            type: ActionTypes.DECREASE_COUNTER
        }
    },
    reset() {
        return {
            type: ActionTypes.RESET_COUNTER
        }
    }
};