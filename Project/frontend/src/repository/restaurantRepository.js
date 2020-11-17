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
}
