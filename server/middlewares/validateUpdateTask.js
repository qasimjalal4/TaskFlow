import BadRequestError from "../errors/BadRequestError";



const validateUpdateTask = (req,res,next) => {

  const { title, desc, due, priority, done } = req.body

  if(title !== undefined) {
    if(!title.trim()) {
      throw new BadRequestError('Title cannot be empty!')
    }

    if(typeof title !== 'string') {
      throw new BadRequestError('Title must be a string!')
    }
  }


  if(desc !== undefined) {
    if(!desc.trim()) {
      throw new BadRequestError('Desc cannot be empty!')
    }

    if(typeof title !== 'string') {
      throw new BadRequestError('Title must be a string!')
    }
  }


  if(due !== undefined) {
    if (!due) {
      throw new BadRequestError('You must select a date')
    }
  }

  if(priority !== undefined) {
    if(!['low','medium','high'].includes(priority.toLowerCase())) {
      throw new BadRequestError('Priority can only be low, medium or high!')
    }
  }


  if(done !== undefined) {
    if(typeof done !== 'boolean') {
      throw new BadRequestError('Done can only be boolean!')
    }
  }

}




export default validateUpdateTask