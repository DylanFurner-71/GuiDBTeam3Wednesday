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

    getRestaurant(restaurantId) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/restaurants/${restaurantId}`)
                .then(resp => resolve(resp.data))
                .catch(e =>   {alert(e);
                    reject();
                    });
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

    addMenuItem(item) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/menu/item/`, item)
                .then(resp => resolve(resp))
                .catch(e =>   {alert(e);
                reject();
                });
        })
    }
  
    updateMenuItem(id, item) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/menu/item/${id}`, item)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }

    deleteMenuItem(id) {
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/menu/item/${id}`)
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

    getOrderHistory(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/restaurant/${id}/history`)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }
}
