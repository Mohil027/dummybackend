require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get("/", (req, res) => {
    res.send("Hello World!!")
})
app.get('/twitter', (req, res) => {
    res.send('mohil027')
})
app.get('/login', (req, res) => {
    res.send('<h1> please login here </h1>')
})
app.get('/youtube', (req, res) => {
    res.send('<h2> Mohil was here </h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })