import Router from 'express';
import userController from './service.js';

const router = new Router();

router.post('/registration', userController.userRegistration)
router.post('/login', userController.userLogin)
router.get('/find', userController.userFind)
router.delete('/del', userController.userDel)

export default router;
