class Contact{
    #secret = 'secret'
    constructor(name, lastName, phone, email){
        this.name = name,
        this.lastName = lastName,
        this.phone = phone,
        this.email = email
    }
}

const contact = new Contact('Vasya', 'N', 12345);
