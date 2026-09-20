import { getTasks as getTasksService,
         createTask as createTaskService,
         deleteTask as deleteTaskService 
       } from '../services/taskServices.js'





export const getTasks = async (req,res) => {

  const { search, priority, status } = req.query

  const tasks = await getTasksService(search,priority,status)
  
  res.status(200).json({
    success: true,
    data: filteredTasks
  })

}





export const createTask = async (req,res) => {

  const { title, desc, due, priority} = req.body

  const newTask = createTaskService(title, desc, due, priority)

  res.status(201).json({
    success: true,
    data: newTask
  })

}





export const deleteTask = async (req,res) => {

  const id = Number(req.params.id)

  const deletedTask = deleteTaskService(id) 
  
 res.status(200).json({
  success: true,
  data: deletedTask
 })

}