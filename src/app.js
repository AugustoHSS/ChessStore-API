import express from 'express'
import cors from 'cors'
import router from './routes/index.js'

const server = express()
server.use(express.json())
server.use(cors())
server.use(router)

server.listen(5000, () => console.log('Running at http://localhost:5000'))
