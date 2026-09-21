import express from 'express'
import { getTasks, createTask, deleteTask, updateTask } from '../controllers/taskControllers.js'
import validateUpdateTask from '../middlewares/validateUpdateTask.js'
import validateTask from '../middlewares/validateTask.js'


const router = express.Router()


router.get('/', getTasks)  

router.post('/',validateTask, createTask)

router.delete('/:id', deleteTask)

router.patch('/:id',validateUpdateTask, updateTask)



export default router