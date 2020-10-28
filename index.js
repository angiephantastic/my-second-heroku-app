const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('/', function(req, res) {

    console.log(`A requeste was madde to the home endpoint!`)

    res.json({
        status: 'ok',
        description: `it's ok what else can I say...`
    })
})

app.listen(port, function() {
    console.log(`running on port ${port}`)
})