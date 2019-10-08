const express = require('express')
const knex = require('knex')
const knexConfig = require('../knexfile')

const db = knex(knexConfig.development);

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
    .then(car => {
        res.json(car)
    })
    .catch(() => {
        res.status(500).json({ message: "Failed to get data" })
    })
})



modules.exports = router;