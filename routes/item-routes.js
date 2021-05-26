const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log("come to item get");
    res.send("response item send")
})

router.post('/', (req, res) => {
    console.log("come to item post");
    res.send("response item send")
})

router.put('/', (req, res) => {
    console.log("come to item put");
    res.send("response item send")
})

router.delete('/', (req, res) => {
    console.log("come to item delete");
    res.send("response item send")
})

module.exports = router