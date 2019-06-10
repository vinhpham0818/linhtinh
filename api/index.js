const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const pg = require('pg')
const env = require('dotenv').config()

const config = {
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
}
//console.log (config)
const pool = new pg.Pool(config)
//var obj = {}

app.get('/api/category', (req, res, next) => {
    console.log(req)
    pool.connect(function (err, client, done) {
        if (err) {
            console.log("Can not connect to the DB" + err);
        }
        client.query('SELECT * FROM category', function (err, result) {
            done()
            if (err) {
                console.log(err)
                // res.status(400).send(err)
                return res.send('error', { message: 'loi roi ban oi' })
            }
            // res.render('index', { cates: result.rows })
            res.send({ cates: result.rows })
        })
    })
})

app.get('/api/products', (req, res, next) => {
    pool.connect(function (err, client, done) {
        if (err) {
            console.log("Can not connect to the DB" + err);
        }
        client.query('SELECT * FROM products', function (err, result) {
            done()
            if (err) {
                console.log(err)
                res.status(400).send(err)
            }
            res.send({ prods: result.rows })
        })
    })
})

app.use(cors())

app.get('/api/hello', cors(), (req, res) => 
res.send({
    
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))