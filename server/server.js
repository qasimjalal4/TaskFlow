import express from 'express'
import path from 'path'
import fs from 'fs/promises'
import { fileURLToPath } from 'url'
 

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())



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



app.get('/tasks', async (req,res) => {

  const { search, priority, status } = req.query

  const tasks = await readTasks()

  let filteredTasks = tasks

  if(search) {

    filteredTasks = filteredTasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase()))

  }

  if(priority) {

    filteredTasks = filteredTasks.filter(task => task.priority === priority)

  }


  if(status) {

    filteredTasks = filteredTasks.filter(task => task.status === status)

  }


  res.status(200).json({
    success: true,
    data: filteredTasks

  })

})




app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`)
})