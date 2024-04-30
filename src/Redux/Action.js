import { REQ_GET_ALL_SUCC, MAKE_REQ, REQ_GET_ALL_FAIL } from "./ActionType";

export const makeRequest = () => {
    return {
        type: MAKE_REQ
    }
}

export const getAllRequestSuccess = (data) => {
    return {
        type: REQ_GET_ALL_SUCC,
        payload: data
    }
}

export const getAllRequestFail = (err) => {
    return {
        type: REQ_GET_ALL_FAIL,
        payload: err
    }
}