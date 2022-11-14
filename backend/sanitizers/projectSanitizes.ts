import { ProjectType } from '../types/projectTypes';
import HttpException from '../utils/httpException';

export function sanitizeProject(project: ProjectType): ProjectType {
    const sanitizedProject: ProjectType = {
        title: '',
    };

    sanitizedProject.title = sanitizeTitle(project.title);
    return sanitizedProject;
}

function sanitizeTitle(title: string): string {
    // types
    if (title === undefined) {
        throw new HttpException('Title is undefined', 400);
    }
    if (typeof title !== 'string') {
        throw new HttpException('Title is not string', 400);
    }

    // atributes
    title = title.trim();
    if (title.length < 3) {
        throw new HttpException('Title must be at least 3 characters ', 400);
    }

    if (title.length > 50) {
        throw new HttpException('Title must be less than 50 characters ', 400);
    }
    return title;

    // if (!req.body.title) {
    //   res.status(400);
    //   throw new Error('Title is required');
    // }      // 11-35 sanitizeTitle is the same as those if condition
    return title.trim(); // trim => removes white signs as spaces
}
