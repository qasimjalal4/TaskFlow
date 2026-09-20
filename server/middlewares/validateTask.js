import BadRequestError from '../errors/BadRequestError.js'

const validateTask = (req,res,next) => {


  const { title, desc, due, priority, done } = req.body



  if(!title || !title.trim()) {

   throw new BadRequestError('Title is required!')
  }



  if(!desc || !desc.trim()) {

   throw new BadRequestError('Description is required!')

  }



  if(!due) {
   throw new BadRequestError('Due date is required!')
  }



  if(!priority) {
   throw new BadRequestError('Priority is required!')
  }


  next()
}















export default validateTask



 

