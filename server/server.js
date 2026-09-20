import express from 'express'
import path from 'path'
import fs from 'fs/promises'
import { fileURLToPath } from 'url'
import validateTask from './middlewares/validateTask.js'

const app = express()

const PORT = process.env.PORT || 3000





const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)



const filePath = path.join(__dirname,'data','data.json')



const readTasks = async () => {

  const tasks = await fs.readFile(filePath,'utf-8')

  return JSON.parse(tasks)

}



const writeTask = async (tasks) => {

  await fs.writeFile(filePath,JSON.stringify(tasks,null,2))

}



app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`)
})