import express from 'express'
import taskRouter from './routes/taskRoutes.js' 
import errorHandler from './middlewares/errorHandler.js'

 


const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())


 

app.use('/tasks', taskRouter)



app.use(errorHandler)




app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`)
})