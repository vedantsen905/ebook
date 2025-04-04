import express from 'express'
import dotenv from "dotenv" 
import connectDB from './db/db.js'
import { app } from './app.js'



dotenv.config()

connectDB()


// const app = express()

const port = process.env.PORT || 5001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})