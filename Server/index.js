require('dotenv').config()
const express = require('express')
const connectToMongoDB = require('./database')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000

app.set('view engine', 'ejs')

connectToMongoDB()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    // res.send("Welcome to the JCC!")
    res.render("EmailVerification", {url: "#"})
})

app.use('/api/auth', require('./routes/auth'))
app.use('/api/users', require('./routes/users'))
app.use('/api/contact', require('./routes/mail'))

app.listen(port, () => {
    console.log(`Server is running on port ${port} - http://localhost:${port}`)
})