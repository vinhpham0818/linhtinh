const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')

app.use(cors())

app.get('/api/hello', cors(), (req, res) => 
res.send({
    
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))