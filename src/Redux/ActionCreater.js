import axios from "axios";
import { getAllRequestFail, getAllRequestSuccess, makeRequest } from "./Action";

export const GetAllPets = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        setTimeout(() => {
            axios.get("http://localhost:8000/pets").then(res => {
                const _list = res.data;
                dispatch(getAllRequestSuccess(_list));
            }).catch(err => {
                dispatch(getAllRequestFail(err.message));
            });
        }, 1000);
    };
}
