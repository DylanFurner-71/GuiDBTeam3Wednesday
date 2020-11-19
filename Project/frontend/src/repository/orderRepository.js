import axios from "axios";

export class OrderRepository {
    url = "http://localhost:8000/api/v1";

    addOrder(order) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/orders`, order)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }
    
    getOrder(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/orders/${id}/details`)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }

    getOrderStatus(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/orders/${id}/status`)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }

    getOrdersForQueue() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/orders/queue`)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }

    updateOrderStatus(id, status) {
        return new Promise((resolve, reject) => {
            axios.update(`${this.url}/orders/${id}/status`, status)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }

    getOrdersForRestaurant(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/orders/${id}/queue`)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }

    getOrderHistoryForRestaurant(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/orders/${id}/history`)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }

}
