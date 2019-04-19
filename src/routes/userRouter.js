import { Router } from 'express'
import * as UserController from '../controllers/userController'

const router = Router()

router.get('/users', UserController.findAll)
router.get('/users/:id', UserController.findById)
router.post('/users', UserController.create)

export default router