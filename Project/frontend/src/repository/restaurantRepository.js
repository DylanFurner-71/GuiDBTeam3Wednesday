import axios from "axios";

export class RestaurantRepository {
    url = "http://localhost:8000/api/v1";

    addRestaurant(restaurant) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/restaurants`, restaurant)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }

    deleteRestaurant(id) {
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/restaurants/${id}`)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }

    getRestaurants() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/restaurants`)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }

    getRestaurant(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/restaurants/${id}`)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }

    getRestaurantAddress(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/restaurant/${id}/address`)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }

    getRestaurantContact(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/restaurant/${id}/contact`)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }

    getMenu(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/restaurants/${id}/menu`)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }

    addMenu(menu) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/restaurants/menu`, menu)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }

    deleteMenu(id) {
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/restaurants/${id}/menu`)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }

    addReview(id, review) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/restaurants/${id}/reviews`, review)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }

    getReviews(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/restaurants/${id}/reviews`)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }

    deleteReview(id) {
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/review/${id}`)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }
}
