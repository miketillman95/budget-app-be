const express = require('express')
const cors = require('cors')
const helmet = require('helmet')


const budgetsRouter=('./budget/budget-router')

const server= express()


server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/budget', budgetsRouter)


server.get('/', (req, res) => {
    res.json({hi: 'its up'})
})

module.exports= server 

