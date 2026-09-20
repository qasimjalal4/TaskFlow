


export const getTasks = async (req,res) => {

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

}





export const createTask = async (req,res) => {


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

}





export const deleteTask = async (req,res) => {

  const id = Number(req.params.id)

  const tasks = await readTasks()


  const taskIndex = tasks.findIndex(task => task.id === id) 

  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'task not found!'
    })

  }


 const deletedTask = tasks.splice(taskIndex,1)

 await writeTask(tasks)

 res.status(200).json({
  success: true,
  data: deletedTask
 })

}