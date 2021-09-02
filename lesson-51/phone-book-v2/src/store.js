export default class Store{
    static login(email, password){
        let users = localStorage.getItem('users');
        if(users !== null){
            users = JSON.parse(users);
            if(users[email] === password){
                localStorage.setItem('currentUser', email);
                return true
            }
        }
        throw new Error ('Wrong email or password')
    }

    static registartion(email, password){
        let users = localStorage.getItem('users');
        if(users !== null){
            users = JSON.parse(users);
            for(let key in users){
                if(key === email){
                    throw new Error (`User with ${email} already exists!`)
                }
            }
            users[email] = password;
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', email);
            return true
        }
    }

    static getCurrentUser(){
        return localStorage.getItem('currentUser')
    }

    static logout(){
        localStorage.removeItem('currentUser')
    }

    static addContact(email, contact){
        const json = localStorage.getItem(email);
        /* let contacts = []
        if(json !== null){
            contacts = JSON.parse(json)
        } */
        const contacts = (json !== null) ? JSON.parse(json) : []
        contacts.push(contact);
        localStorage.setItem(email, JSON.stringify(contacts));
        return true
    }

    static deleteContact(email, index){
        const contacts = JSON.parse(localStorage.getItem(email));
        contacts.splice(index,1);
        localStorage.setItem(email, JSON.stringify(contacts))
    }

    static getAllContacts(email){
        const contacts = localStorage.getItem(email);
        return contacts ? JSON.parse(contacts) : []
    }

    static getContactByIndex(email, index){
        const contacts = this.getAllContacts(email);
        return contacts[index]
    }
}