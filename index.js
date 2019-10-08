const express = require('express')
const server = express();
const carDealerRouter = require('./router/car-dealer-router') 

server.use(express.json());
server.use('/api/', carDealerRouter)


const port = 5000;
server.listen(port, () => console.log(`Running on port ${port}`))