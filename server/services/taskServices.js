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




export const deletedTask =  async (id) => {

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


 return deletedTask
}