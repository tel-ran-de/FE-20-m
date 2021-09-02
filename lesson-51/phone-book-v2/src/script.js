function main(){

const state = {
    currentUser: null,
    location: null,
    contacts: []
}

const root = document.querySelector('#root');


let currentPageLink = document.querySelector('a[href= "contacts"]'),
    currentContactRow;

renderContacts(contacts);

nav.onclick = function (event) {
    event.preventDefault();
    if (event.target.tagName === 'A') {
        currentPageLink.classList.remove('active');
        currentPageLink = event.target;
        currentPageLink.classList.add('active');
        navigation(currentPageLink.getAttribute('href'))
    }
}


function navigation(path) {
    switch (path) {
        case 'contacts':
            renderContacts(contacts);
            break;
        case 'addContact':
            renderAddContact();
            break;
        case 'registration':
            renderRegistartionForm();
            break;
    }
}


function contactClickHandler(event, array) {
    let li = event.target;
    if (li.classList.contains('delete')) {
        array.splice(li.parentNode.dataset.index, 1)
        renderContacts(contacts)
    } else {
        if (li.tagName !== 'LI') {
            li = event.target.parentNode
        }
        if (currentContactRow) {
            currentContactRow.classList.remove('item-active')
        }
        showContact(li.dataset.index, array)
        currentContactRow = li
        currentContactRow.classList.add('item-active')
    }
}



function formSubmitHandler(event) {
    event.preventDefault();
    const form = event.target
    console.log(form.elements)
    if(!formValidation(form)){
    contacts.push({
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        address: form.address.value,
        desc: form.description.value
    });
    showSuccess(form.name.value)
    clearForm(form);
}
   

   /* currentPageLink.classList.remove('active')
    currentPageLink = document.querySelector('a[href= "contacts"]')
    currentPageLink.classList.add('active');
    navigation('contacts'); */

}
function showMessage(formIsComplit, text){
    let div = root.querySelector('.alert');
    if(!div){
        div = document.createElement('div');
        root.prepend(div)
    }
    div.className = `alert ${formIsComplit ? 'alert-success' : 'alert-danger'}`;
    div.innerHTML = formIsComplit ? `Contact ${name} was added`: text
}

}



main();