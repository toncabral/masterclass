import { Router } from 'express'

import UserController from './controllers/UserController'
import UserAddressesController from './controllers/UserAddressesController'
import UserTechsController from './controllers/UserTechsController'
import ReportController from './controllers/ReportController'
import TechController from './controllers/TechController'

const routes = Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.delete('/users/:user_id', UserController.delete)

routes.get('/users/:user_id/addresses', UserAddressesController.index)
routes.post('/users/:user_id/addresses', UserAddressesController.store)

routes.get('/users/:user_id/techs', UserTechsController.index)
routes.post('/users/:user_id/techs', UserTechsController.store)
routes.delete('/users/:user_id/techs', UserTechsController.delete)

routes.get('/report', ReportController.show)

routes.get('/techs/:tech_id', TechController.index)
routes.post('/techs', TechController.store)

export default routes
