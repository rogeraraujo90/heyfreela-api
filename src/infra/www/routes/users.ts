import { Router } from 'express';
import UsersAPI from '@modules/users/UsersAPI';

const router = Router();
const controller = new UsersAPI();

router.get('/:id', controller.show);

export default router;
