const express = require('express')

const routes = express.Router()

const controller = require('./app/controllers')

const authMiddleware = require('./app/middlewares/auth')

routes.post('/users', controller.UserController.store)
routes.post('/session', controller.SessionController.store)

routes.use(authMiddleware)
/**
 * Ads
 */

routes.get('/ads', controller.AdController.index)
routes.get('/ads/:id', controller.AdController.show)
routes.post('/ads', controller.AdController.store)
routes.put('/ads/:id', controller.AdController.update)
routes.delete('/ads/:id', controller.AdController.destroy)

/**
 * Purchase
 */

routes.post('/purchases', controller.PurchaseController.store)

module.exports = routes
