import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
    GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING
} from "./types";
//authentication actions pertain to those actions called by react on the api that relate to logging in or registration


const api = "http://localhost:8000";
axios.defaults.baseURL = api;
export const register = (userData, history) => dispatch => {
    axios
        .post(`/${userData.accountType}`, userData)
        .then(() => history.push(`/login/${userData.accountType}`)) // re-direct to login on successful register
        .catch(err =>
            dispatch({
                // type: GET_ERRORS,
                // payload: err.response.data
            })
        );
};
// Change Password
export const changePassword = (userData, history) => dispatch => {
    axios
        .post(`/users/changePassword`, userData)
        .then(() => history.push("/home")) // re-direct to home after changing password
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Login - get user token
export const loginUser = userData => dispatch => {
    const userID = "1"; //this will someday be a call to the api to find the user we are about to log in
    axios
        .post(`/login/${userData.accountType}/${userID}`, userData)
        .then(res => {
            // Save to localStorage
// Set token to localStorage
            const {token} = res.data;
            localStorage.setItem("jwtToken", token);
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            }
        );
};
// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};
// User loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
};
// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};