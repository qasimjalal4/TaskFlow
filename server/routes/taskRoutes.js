import express from 'express'
import { readTasks, writeTask } from '../utils/TaskFile.js'
import { getTasks, createTask, deleteTask} from '../controllers/taskControllers.js'



const router = express.Router()


router.get('/', getTasks)  

router.post('/', createTask)

router.delete('/:id', deleteTask)





export default router