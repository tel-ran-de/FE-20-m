const CONTACTS_KEY = 'CONTACTS';

class Store{

    static save(contact){
        const allContacts = this.getAll();
        allContacts.push(contact);
        this.updateLocalStorage(allContacts);
    }

    static getAll(){
        let str = localStorage.getItem(CONTACTS_KEY);

        if(!str){
            return []
        }
       /*  const contacts = JSON.parse(str);
        console.log(contacts)
        return contacts  */

       return (str) ? JSON.parse(str) : []
    }

    static updateLocalStorage(contacts){

        localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts))
    }

}
