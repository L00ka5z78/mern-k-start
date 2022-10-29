import { Request, Response } from 'express';
import { checkIsValidObjectId } from '../database/db';
const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
import {
  createProject,
  getProjects,
  getProjectById,
  deleteProject,
  updateProject,
} from '../services/projectService';

//@desc Get all projects
//@route GET /api/projects
//@access Public
const getProjectsHandler = asyncHandler(async (req: Request, res: Response) => {
  const projects = await getProjects();
  res.status(200).json(projects);
});

//@desc Create a new project
//@route POST /api/projects
//@access Private

const createProjectHandler = asyncHandler(
  async (req: Request, res: Response) => {
    if (!req.body.title) {
      res.status(400);
      throw new Error('Title is required');
    }
    const createdProject = await createProject(req.body);
    res.status(201).json(createdProject);
  }
);

//@desc Get a project by id
//@route GET /api/projects/:id
//@access Public

const getProjectHandler = asyncHandler(async (req: Request, res: Response) => {
  const project = await getProjectById(req.params.id);
  res.status(200).json(project);
});

//@desc Delete a project by id
//@route DELETE /api/projects/:id
//@access Private

const deleteProjectHandler = asyncHandler(
  async (req: Request, res: Response) => {
    checkIsValidObjectId(req.params.id);
    const project = await deleteProject(req.params.id);

    res.status(200).json({
      message: `Project ${req.params.id} deleted`,
      project: project,
    });
  }
);

//@desc Update a project by id
//@route PUT /api/projects/:id
//@access Private

const updateProjectHandler = asyncHandler(
  async (req: Request, res: Response) => {
    if (!req.body.title) {
      res.status(400);
      throw new Error('Title is required');
    }

    const project = await updateProject(req.params.id, req.body);
    res.json(project);
  }
);

module.exports = {
  getProjectsHandler,
  createProjectHandler,
  getProjectHandler,
  deleteProjectHandler,
  updateProjectHandler,
};
