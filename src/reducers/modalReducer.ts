import { SHOW_MODAL, HIDE_MODAL } from "../actions/types";

const INITIAL_STATE = {
    modal: false
};

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case SHOW_MODAL:
            return { ...state, modal: true };
        case HIDE_MODAL:
            return { ...state, modal: false };
        default:
            return state;
    }
};