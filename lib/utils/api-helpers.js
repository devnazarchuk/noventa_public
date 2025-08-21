import { NextResponse } from 'next/server'

// Success response helper
export function successResponse(data, message = 'Success', status = 200) {
  return NextResponse.json({
    success: true,
    message,
    data
  }, { status })
}

// Error response helper
export function errorResponse(message, status = 400, errors = null) {
  const response = {
    success: false,
    message,
    ...(errors && { errors })
  }
  
  return NextResponse.json(response, { status })
}

// Validation error response
export function validationErrorResponse(errors) {
  return errorResponse('Validation failed', 400, errors)
}

// Not found response
export function notFoundResponse(message = 'Resource not found') {
  return errorResponse(message, 404)
}

// Unauthorized response
export function unauthorizedResponse(message = 'Unauthorized') {
  return errorResponse(message, 401)
}

// Server error response
export function serverErrorResponse(message = 'Internal server error') {
  return errorResponse(message, 500)
}

// Database error handler
export function handleDatabaseError(error) {
  console.error('Database error:', error)
  
  if (error.code === 11000) {
    return errorResponse('Duplicate entry', 409)
  }
  
  if (error.name === 'ValidationError') {
    const errors = Object.values(error.errors).map(err => ({
      field: err.path,
      message: err.message
    }))
    return validationErrorResponse(errors)
  }
  
  if (error.name === 'CastError') {
    return errorResponse('Invalid ID format', 400)
  }
  
  return serverErrorResponse()
}

// Async handler wrapper for better error handling
export function asyncHandler(handler) {
  return async (request, context) => {
    try {
      return await handler(request, context)
    } catch (error) {
      console.error('API Error:', error)
      return handleDatabaseError(error)
    }
  }
}

// Pagination helper
export function getPaginationParams(request) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page')) || 1
  const limit = parseInt(searchParams.get('limit')) || 10
  const skip = (page - 1) * limit
  
  return { page, limit, skip }
}

// Search and filter helper
export function buildQuery(searchParams) {
  const query = {}
  
  if (searchParams.get('search')) {
    query.$or = [
      { title: { $regex: searchParams.get('search'), $options: 'i' } },
      { content: { $regex: searchParams.get('search'), $options: 'i' } }
    ]
  }
  
  if (searchParams.get('rating')) {
    query.rating = { $gte: parseInt(searchParams.get('rating')) }
  }
  
  if (searchParams.get('category')) {
    query['productId.category'] = searchParams.get('category')
  }
  
  return query
}

// Sort helper
export function buildSort(sortBy) {
  const sortOptions = {
    newest: { createdAt: -1 },
    oldest: { createdAt: 1 },
    rating: { rating: -1 },
    popular: { totalReactions: -1 }
  }
  
  return sortOptions[sortBy] || sortOptions.newest
} 