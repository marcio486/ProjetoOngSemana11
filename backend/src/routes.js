const express = require('express')
const connection = require('./database/connection')
const routes = express.Router()
const OngController = require('./controllers/OngController')
const IncidenteController = require('./controllers/IncidenteController')
const ProfileController = require('./controllers/ProfileController')
const SessionController= require('./controllers/SessionController')

routes.get('/incidents', IncidenteController.index);
routes.get('/ongs', OngController.index);
routes.post('/sessions', SessionController.create);

routes.get('/profile', ProfileController.index);

routes.post('/ongs', OngController.create);
routes.post('/incidents', IncidenteController.create);


routes.delete('/incidents/:id',IncidenteController.delete)
module.exports = routes;