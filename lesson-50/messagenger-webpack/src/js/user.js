export default class User{
    constructor(name, city) {
        this.name = name
        this.city = city
        this.id = User.id++
    }

    static id = 0

    renderUser() {
        return `<h3 data-id ="${this.id}">${this.name}, ${this.city}</h3>`
    }
}
