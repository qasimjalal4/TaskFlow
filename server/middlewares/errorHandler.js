const errorHandler = (err,req,res,next) => {
  return res.status(statusCode).json({
    success: false,
    message: err.message
  })
} 