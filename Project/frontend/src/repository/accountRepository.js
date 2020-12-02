import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
    GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING
} from "./types";
//authentication actions pertain to those actions called by react on the api that relate to logging in or registration

export class AccountRepository {
    url = "http://localhost:8000/api/v1";

    getAccounts() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/accounts`)
            .then(resp => resolve(resp.data))
            .catch(err => console.log(err.response));
        });
    }

    getAccount(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/accounts/${id}`)
            .then(resp => resolve(resp.data))
            .catch(err => console.log(err.response));
        });
    }

    deleteAccount(id) {
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/accounts/${id}`)
            .then(resp => resolve(resp.data))
            .catch(err => console.log(err.response));
        });
    }

    getAccountContact(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/account/${id}/contact`)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }

    addOrderAddress(address) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/address`, address)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }

    getOrderHistory(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/account/${id}/history`)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }
}

export const register = (userData, history) => dispatch => {
    axios
        .post(`/register/${userData.accountType}`, userData)
        .then(() => history.push(`/login/${userData.accountType}`)) // re-direct to login on successful register
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
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
    axios
        .post(`/login`, userData) //{userData.accountType}/${userID}
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
