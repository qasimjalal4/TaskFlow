import express from 'express'
import taskRouter from './routes/taskRoutes' 
import validateTask from './middlewares/validateTask'

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())


 

app.use('/tasks', taskRouter)

app.use('/tasks',validateTask, taskRouter)

app.use('/tasks/:id', taskRouter)


app.patch('/tasks/:id', async (req, res) => {



  const id = Number(req.params.id)



  const tasks = await readTasks()



  const task = tasks.find(task => task.id === id)



  if(!task) {

    return res.status(404).json({

      success: false,

      message: 'Task not found!'

    })
  }
})



  const { title, desc, due, priority, done } = req.body





    if (title !== undefined) {

    task.title = title

  }



  if (desc !== undefined) {

    task.desc = desc

  }



  if (due !== undefined) {

    task.due = due

  }



  if (priority !== undefined) {

    task.priority = priority

  }



  if (done !== undefined) {

    task.done = done

  }










app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`)
})