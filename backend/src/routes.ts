import { Router } from 'express'
import UserController from './controllers/Usercontroller'

const routes = Router()

routes.get('/users',UserController.index)
routes.post('/users',UserController.create)

export default routes
