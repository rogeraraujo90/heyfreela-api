import { Router } from 'express';
import projects from './projects';
import users from './users';

const router = Router();

router.use('/projects', projects);
router.use('/users', users);

export default router;
