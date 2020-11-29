import axios from 'axios';

export class AccountRepository {

    url = 'http://localhost:8000/api/v1';

    config = {
        // headers: {
        // }
    };
    register(){
        
    }
    getAccounts() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}`, this.config)
            .then(x => resolve(x.data))
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }

    getAccount(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${id}`, this.config)
            .then(x => resolve(x.data))
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }

    addAccount(account) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}`, account, this.config)
            .then(x => resolve(x.data))
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }

    updateAccount(id, account) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/${id}`, account, this.config)
            .then(x => resolve(x.data))
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }
    
    deleteAccount(id) {
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/${id}`, this.config)
            .then(() => resolve())
            .catch(e => {
                alert(e);
                reject();
            });
        });
    }
}
