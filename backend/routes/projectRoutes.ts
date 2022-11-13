import * as express from 'express';
import { protect } from '../models/authMiddleware';
const projectRoutes = express.Router();

import {
    getProjectsHandler,
    createProjectHandler,
    getProjectHandler,
    deleteProjectHandler,
    updateProjectHandler,
} from '../controllers/projectController';

projectRoutes
    .route('/')
    .get(getProjectsHandler)
    .post(protect, createProjectHandler);
projectRoutes
    .route('/:id')
    .get(getProjectHandler)
    .put(protect, updateProjectHandler)
    .delete(protect, deleteProjectHandler);

export default projectRoutes;
