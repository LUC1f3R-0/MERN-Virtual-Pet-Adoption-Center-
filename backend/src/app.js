import express from 'express'
import cors from 'cors'
import rootRoute from './routes/pet.route.js'
import 'dotenv/config'

const app = express()

app.use(express.json())
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }))


app.use('/pets', rootRoute)

export default app