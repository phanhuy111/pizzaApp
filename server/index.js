const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const userRouter = require('./routes/user')

// setup environment
dotenv.config()

// connect database
mongoose.connect('mongodb://pizza123:minhhuy123@ds241268.mlab.com:41268/pizzaapi', { useNewUrlParser: true })

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log('MongoDB Connected...') }
);

// create server
const app = express()

// middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// routes
app.use('/api/auth', userRouter)

const PORT = process.env.PORT || 5000

// run server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))