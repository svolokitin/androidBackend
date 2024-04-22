import Router from 'express';
import userController from './service.js';

const router = new Router();

router.get('/find', userController.userFind)
router.get('/find/:id', userController.userFindById)
router.get('/findByEmail/:email', userController.userFindByEmail)
router.post('/registration', userController.userRegistration)
router.post('/login', userController.userLogin)
router.delete('/del', userController.userDel)

export default router;
