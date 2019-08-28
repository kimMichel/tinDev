const express = require('express');
const DevController = require('./controllers.js/DevController');
const LikeController = require('./controllers.js/LikeController');
const DislikeController = require('./controllers.js/DislikeController');

const routes = express.Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;