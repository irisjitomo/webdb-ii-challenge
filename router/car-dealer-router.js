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

router.post('/', (req, res) => {
    !req.body.VIN || !req.body.Make || !req.body.Model || !req.body.Mileage 
    ? res.status(400).json({ required: 'VIN, Make, Model, Mileage' })
    : db('cars').insert(req.body, 'id')
    .then(newBody => {
        res.status(200).json(newBody)
    })
    .catch(() => {
        res.status(500).json({ error: 'failed operation'})
    })
})



module.exports = router;