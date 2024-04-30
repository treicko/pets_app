import { MAKE_REQ, REQ_GET_ALL_FAIL, REQ_GET_ALL_SUCC } from "./ActionType"

export const initialState = {
    isLoading: false,
    petList: [],
    errorMessage: ''
}

export const PetReducer = (state = initialState, action) => {
    switch (action.type) {
        case MAKE_REQ:
            return {
                ...state,
                isLoading: true
            };
        case REQ_GET_ALL_SUCC:
            return {
                ...state,
                isLoading: false,
                petList: action.payload
            };
        case REQ_GET_ALL_FAIL:
            return {
                ...state,
                isLoading: false,
                petList: [],
                errorMessage: action.payload
            };
        default: return state;
    };
}