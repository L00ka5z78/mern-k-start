import { model } from 'mongoose';
import projectSchema, { IProjectSchema } from '../schema/projectSchema';

const projectModel = model<IProjectSchema>('Project', projectSchema);

export default projectModel;
