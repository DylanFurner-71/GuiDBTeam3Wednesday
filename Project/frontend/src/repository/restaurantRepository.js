import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
    GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING
} from "./types";
//authentication actions pertain to those actions called by react on the api that relate to logging in or registration

const api = "http://localhost:8000/api/v1";

axios.defaults.baseURL = api;

export const getRestaurants = (userData, history) => dispatch => {
    axios
        .get(`/restaurants`, userData)
        .then(() => history.push(`/login/${userData.accountType}`)) // re-direct to login on successful register
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const addRestaurant = (restaurant) => dispatch => {
    console.log(restaurant.restaurant_name);
    axios
        .post(`http://0.0.0.0:8000/api/v1/restaurants`, restaurant)
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};