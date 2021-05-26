const express = require('express')
const router = express.Router()

const connection = require('../database/db-connection')


router.get('/', (req, res) => {
    console.log("come to customer get");
    res.send("response customer send")
})

router.post('/', (req, res) => {
// console.log("come to customer post");
    connection.query('INSERT INTO Customer VALUES(?,?,?,?)', [req.body.id, req.body.name, req.body.address, req.body.salary], function (err, rows) {
        if (err) throw err
        res.send(rows)
    })
    // console.log("come to customer post");
    // res.send("response customer send")
    // console.log(req.headers.id + " " + req.headers.name+ " " + req.headers.address);
    // console.log(req.body.id + " " + req.body.name);
})

router.put('/', (req, res) => {
    console.log("come to customer put");
    res.send("response customer send")
})

router.delete('/', (req, res) => {
    console.log("come to customer delete");
    res.send("response customer send")
})

module.exports = router