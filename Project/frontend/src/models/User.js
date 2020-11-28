// Generic User class used for web manager user managing
export class User {
    constructor(id, firstName, lastName, email, accountType) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.accountType = accountType;
    }
}