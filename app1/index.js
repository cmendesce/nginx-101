const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Render from app1'))

app.get('/cache', (req, res) => res.send('app1 -> ' + new Date()))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
