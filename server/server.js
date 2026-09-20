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



app.post('/tasks', async (req,res) => {


  const { title, desc, due, priority} = req.body


  const tasks = await readTasks()


  const newTask = {
    id: tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1,
    title: title,
    desc: desc,
    due: due,
    created: new Date().toISOString().split('T')[0],
    priority: priority,
    done: false
  }

  tasks.push(newTask)

  await writeTask(tasks)


  res.status(201).json({
    success: true,
    data: newTask
  })

})


app.delete('/tasks/:id', async (req,res) => {

  const id = Number(req.params.id)

  const tasks = await readTasks()


  const taskIndex = tasks.findIndex(task => task.id === id) 

  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'task not found!'
    })

  }


  tasks.splice(taskIndex,1)

 await writeTask(tasks)

 res.status(200).json({
  success: true,
  data: tasks 
 })

})










app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`)
})