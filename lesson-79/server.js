const express = require('express')
const cors = require('cors')
const PORT = 8080
const db = require('./models')


const app = express()
let corsOptions = {
    origin:'http://localhost:3000'
}

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

db.sequelize.sync()
require('./routes/todo.routes')(app)

app.get('/', (req,res)=>{
    res.json({message: 'Hello world!'})
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})