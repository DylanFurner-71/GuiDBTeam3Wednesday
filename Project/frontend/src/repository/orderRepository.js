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
            axios.get(`${this.url}/order/${id}`)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }

    getOrdersByStatus(status) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/orders/${status}`)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }

    updateOrderStatus(id, status) {
        return new Promise((resolve, reject) => {
            axios.update(`${this.url}/orders/${id}/${status}`, status)
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

    getOrderAddress(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/order/${id}/address`)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }
}
