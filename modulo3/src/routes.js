const express = require('express')
const validate = require('express-validation')
const handle = require('express-async-handler')

const routes = express.Router()

const controller = require('./app/controllers')

const validators = require('./app/validators')

const authMiddleware = require('./app/middlewares/auth')

routes.post(
  '/users',
  validate(validators.User),
  handle(controller.UserController.store)
)
routes.post(
  '/session',
  validate(validators.Session),
  handle(controller.SessionController.store)
)

routes.use(authMiddleware)
/**
 * Ads
 */

routes.get('/ads', handle(controller.AdController.index))
routes.get('/ads/:id', handle(controller.AdController.show))
routes.post(
  '/ads',
  validate(validators.Ad),
  handle(controller.AdController.store)
)
routes.put(
  '/ads/:id',
  validate(validators.Ad),
  handle(controller.AdController.update)
)
routes.delete('/ads/:id', handle(controller.AdController.destroy))

/**
 * Purchase
 */

routes.post(
  '/purchases',
  validate(validators.Purchase),
  handle(controller.PurchaseController.store)
)

module.exports = routes
