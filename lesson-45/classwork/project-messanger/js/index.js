// # проект messanger
// объект User : {id: 3, name: 'Vasya', city: 'Berlin'}
// массив из трех users :[user1, user2, user3]
//
// массив сообщений: [{
//     id:0,
//     userId:3,
//     title:'Some title',
//     text: 'Some text',
//     data: '01.10.2021'
//     comments:[{}, {}, {}]
// },{},{}]
//
// comment: {
//     id:0,
//         userId:3,
//         postId:0,
//         text: 'some text',
//         data:'05.10.2021
// }

class User {
    constructor(name, city) {
        this.name = name
        this.city = city
        this.id = User.id++
    }

    static id = 0

    renderUser() {
        return `<h3 data-id="${this.id}">${this.name}, ${this.city}</h3>`
    }
}

const users = [
    new User('Vasya Pupkin', 'Berlin'),
    new User('Maksym Kostenko', 'Mainz'),
    new User('Ivan Ivanov', 'Kiev')
]

const usersList = document.querySelector('.users-list')

const renderUsersList = (array) => {
    array.forEach(item => {
        usersList.innerHTML += item.renderUser()
    })
}

renderUsersList(users)

class Message {
    constructor(userId, title, text, data) {
        this.userId = userId
        this.title = title
        this.text = text
        this.data = data
        this.comments = []
        this.id = Message.id++
    }

    static id = 0

    renderMessage() {
        return `
            <div data-message="${this.id}">
                <h4>${this.title}</h4>
                <p>Published: ${this.data}</p>
            </div>
        `
    }

    renderFullInfo(userName) {
        return `
            <div>
               <h3>${this.title}</h3>
               <p>${this.text}</p>
               <h4>Published: ${this.data}</h4>
               <hr>
               ${(this.comments.length === 0) ? "<p>No comment</p>" : this.comments.map(item => item.renderComment(userName)).join('')}
            </div>
        `
    }
}

class Comment {
    contructor(userId, messageId, text, data) {
        this.id = Comment.id++
        this.userId = userId
        this.messageId = messageId
        this.text = text
        this.data = data
    }

    static id = 0

    renderComment(userName) {
        return `
            <div>
                <h5>${this.text}</h5>
                <p>${this.data}, comment by ${userName}</p>
            </div>
        `
    }
}

const messages = [
    new Message(0, 'Hello', 'World', new Date().getFullYear()),
    new Message(0, 'About', 'Meeting', new Date().getFullYear()),
    new Message(1, 'Text', 'Info', new Date().getFullYear())
]
const leftBox = document.querySelector('.left')

usersList.onclick = (event) => {
    if(event.target.tagName === 'H3'){
        const user = users.find(item => +event.target.dataset.id === item.id)
        const userMessages = messages.filter(message => message.userId === user.id)
        console.log(user)
        console.log(userMessages)
        leftBox.innerHTML = userMessages.map(item => item.renderMessage()).join('')
    }
}

leftBox.onclick = (event) => {
    console.log(event.target.dataset.message)
}
