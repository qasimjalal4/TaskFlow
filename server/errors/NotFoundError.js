import AppError from "./AppError";


class NotFoundError extends AppError {

  constructor(message) {

    super(message,400)
  }
}



export default NotFoundError