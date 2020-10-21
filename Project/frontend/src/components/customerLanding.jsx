import '../components/App.css';

class customerLanding extends Component{
    constructor(userFirstName, userLastName, userEmail) {
        super();
        this.state = {
            firstName: userFirstName,
            lastName: userLastName,
            email: userEmail
        };
    }

    saveUpdates() {
        var editCustomer = document.getElementById("editCustomer");
        var userUpdates = editCustomer.innerHTML;
        // Temporary session storage for now
        sessionStorage.userEdits = userUpdates;
        alert("Information saved.");
    }

    render() {
        const {firstName, lastName, email} = this.state;
        return(
            <div id="customerLanding">
                <h1 class="welcome">Welcome, {firstName} {lastName}</h1>
                <form name="customerInfo" class="user-info-form">
                    <label for="firstName">Fist Name:</label>
                    <input type="text" name="firstName" value={firstName}></input>
                    <label for="lastName">Last Name:</label>
                    <input type="text" name="lastName" value={lastName}></input>
                    <label for="email">Email:</label>
                    <input type="email" name="email" value={email}></input>
                    <label for="address1">Address Line 1:</label>
                    <input type="text" name="address1" value="Hello"></input>
                    <label for="address2">Address Line 2:</label>
                    <input type="text" name="address2"></input>
                    <label for="city">City:</label>
                    <input type="text" name="city"></input>
                    <label for="zip">Zip Code:</label>
                    <input type="number" name="zip"></input>
                    <input type="button" value="Update" onclick="saveUpdates()"></input>
                </form>
            </div>
        ) 
    }
}
export default customerLanding;