const express = require('express')
const connectToMongoDB = require('./database')
const cors = require('cors')
const app = express()
const port = 3000

connectToMongoDB()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.use('/api/auth', require('./routes/auth'))
app.use('/api/users', require('./routes/users'))

app.listen(port, () => {
    console.log(`Server is running on port ${port} - http://localhost:${port}`)
})