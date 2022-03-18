import { Router } from 'express';
import ProjectsAPI from '@modules/projects/ProjectsAPI';

const router = Router();
const controller = new ProjectsAPI();

router.get('/', controller.index);

export default router;
