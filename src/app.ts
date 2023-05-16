import express from 'express'
import cors from 'cors'
import "dotenv/config"
import { router } from './routes'
import connectDB from './config/mongo'
const PORT = process.env.PORT || 2001;

const app = express()
app.use(cors())
app.use(express.json())

app.use(router)

connectDB().then(() => {
    console.log('Connected to DB')
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
