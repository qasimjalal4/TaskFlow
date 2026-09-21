import BadRequestError from "../errors/BadRequestError.js"
import NotFoundError from "../errors/NotFoundError.js"
import { readTasks, writeTask } from "../utils/TaskFile.js"


export const getTasks = async (search, priority, status) => {

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


  return filteredTasks
}




export const createTask = async (title, desc, due, priority) => {

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

  return newTask

}




export const deleteTask =  async (id) => {

  const tasks = await readTasks()


  const taskIndex = tasks.findIndex(task => task.id === id) 

  if (taskIndex === -1) {
    throw new NotFoundError('task not found!')
  }


 const deletedTask = tasks.splice(taskIndex,1)

 await writeTask(tasks)


 return deletedTask
}






export const updateTask =  async (id,updates) => {

  
  const tasks = await readTasks()

  const task = tasks.find(task => task.id === id)


  if(!task) {
    throw new NotFoundError('Task not found!')
  }


  const { title, desc, due, priority, done } = updates
  


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

  await writeTask(tasks)

  return task

}