import { Response, Request } from 'express';
import { NODE_ENV } from '../utils/config';
import HttpException from '../utils/httpException';

export const errorHandler = (
    err: HttpException,
    req: Request,
    res: Response
    // next: NextFunction
): Response => {
    const status = err.status ?? 500;
    const message = err.message ?? 'Something went wrong!';

    return res.status(status).json({
        message,
        stack: NODE_ENV === 'production' ? null : err.stack,
    });
};
