export class Restaurant {
    constructor(name, address, id=0, menu=[]) {
        this.name = name;
        this.address = address;
        this.id = id;
        this.menu = menu;
    }
}