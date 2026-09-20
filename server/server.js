import express from 'express'
import path from 'path'
import fs from 'fs/promises'
import { fileURLToPath } from 'url'
import validateTask from './middlewares/validateTask.js'

const app = express()

const PORT = process.env.PORT || 3000

 

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`)
})