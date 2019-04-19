import { Router } from 'express'
import userRouter from './userRouter'

const router = Router()

router.get('/', (req, res) => 
res.status(200).json({ name: 'Ajude Quem Ajuda' }))

router.use(userRouter)

export default router