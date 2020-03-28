const express = require('express');

const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileControler');
const LoginController = require('./controller/LoginController')

const routes = express.Router();

routes.post('/login', LoginController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create); 

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;