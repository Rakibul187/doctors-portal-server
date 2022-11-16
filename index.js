const express = require('express');
const cors = require('cors');
const app = express()
const port = process.eventNames.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
    res.send('Doctors Portal Server is Running')
})

app.listen(port, () => {
    console.log(`Doctor Portal is Running on port ${port}`)
})