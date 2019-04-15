const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => res.send('Render from app2'))

app.get('/cache', (req, res) => res.send('app2 -> ' + new Date()))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
