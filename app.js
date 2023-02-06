const express = require('express')
const app = express()

const PORT = 3000

app.get('/', (req, res) => {
    res.send('<h1>Paramak says Hello</h1>')
})

app.listen(3000, () => {
    console.log(`App is running on port: ${PORT}`)
})
