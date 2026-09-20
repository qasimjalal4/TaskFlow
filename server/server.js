import express from 'express'
import path from 'path'
import fs from 'fs/promises'
import { fileURLToPath } from 'url'
import taskRouter from './routes/taskRoutes' 

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())



const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const filePath = path.join(__dirname,'data','data.json')


export const readTasks = async () => {

  const tasks = await fs.readFile(filePath,'utf-8')

  return JSON.parse(tasks)

}



export const writeTask = async (tasks) => {

  await fs.writeFile(filePath,JSON.stringify(tasks,null,2))

}



app.use('/tasks', taskRouter)

app.use('/tasks', taskRouter)

app.use('/tasks/:id', taskRouter)










app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`)
})