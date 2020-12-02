import axios from 'axios';

export class AccountRepository {

    url = 'http://localhost:8000';

    config = {
    };
    register(accountData, account_type){
       return new Promise((resolve, reject) => {
           axios.post(`${this.url}/register/${account_type}`, accountData)
           .then(x=> resolve(x.data))
           .catch(e => {
               alert(e);
               reject();
           });
           });
    }

    getAccounts() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/api/v1/accounts`, this.config)
            .then(x => resolve(x.data))
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }
        login(userData, history) {
            const {email, password} = userData;
          return new Promise((resolve, reject) => {
              axios
            .post("http://localhost:8000/login", 
            {
             email,
              password
            }
            )
            .then(response => {
              if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data.user));
              }
      
              return resolve(response.data);
            }).catch(e=> {
            alert(e); 
        reject();
        })
        })
    }
      
    logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("jwtToken");
        console.log(localStorage);
    }

    getAccount(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/api/v1/accounts/${id}`, this.config)
            .then(x => resolve(x.data))
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }

    deleteAccount(id) {
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/api/v1/accounts/${id}`, this.config)
            .then(x => resolve(x.data))
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }

    updateAccount(id, account) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/api/v1/account/${id}`, account, this.config)
            .then(x => resolve(x.data))
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }

    getAccountContact(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/api/v1/account/${id}/contact`)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }

    addOrderAddress(address) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/api/v1/address`, address)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }

    getOrderHistory(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/api/v1/account/${id}/history`)
                .then(resp => resolve(resp.data))
                .catch(err => console.log(err.response));
        })
    }
}
