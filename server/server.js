import express from 'express'
import { errorHandler } from './middlewares/errorHandler'


const app = express()

const PORT = process.env.PORT

app.use(express.json())

app.get('/tasks', (req,res) => {

  res.status(200).json({
    success: true,
    data: 
  })
})


app.use(errorHandler)


app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`)
})