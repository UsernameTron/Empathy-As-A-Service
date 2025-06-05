import { Request, Response, NextFunction } from 'express';
import { ApiError } from './error.middleware';

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  next(new ApiError(404, `Not Found - ${req.originalUrl}`));
};